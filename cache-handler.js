// Custom cache handler for Next.js
// This file implements a custom caching strategy to improve build and runtime performance

const { createHash } = require('crypto');
const fs = require('fs');
const path = require('path');

// Cache directory - Use environment variable or fallback to a temporary directory for serverless environments
const CACHE_DIR = process.env.NEXT_CACHE_DIR || (process.env.LAMBDA_TASK_ROOT ? path.join('/tmp', 'next-custom-cache') : path.join(process.cwd(), '.next', 'cache', 'custom'));

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  try {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
    console.log(`Created cache directory at ${CACHE_DIR}`);
  } catch (error) {
    console.error(`Failed to create cache directory at ${CACHE_DIR}:`, error);
  }
}

// Tag index file path
const TAG_INDEX_PATH = path.join(CACHE_DIR, 'tag_index.json');

/**
 * Custom cache handler implementation
 * @see https://nextjs.org/docs/app/api-reference/next-config-js/cacheHandler
 */
class CustomCacheHandler {
  constructor() {
    this.name = 'custom-cache-handler';
    this.tagIndex = {};
    this.loadTagIndex();
  }

  // Load tag index from file
  loadTagIndex() {
    if (fs.existsSync(TAG_INDEX_PATH)) {
      try {
        const indexData = fs.readFileSync(TAG_INDEX_PATH, 'utf8');
        this.tagIndex = JSON.parse(indexData);
      } catch (error) {
        console.error('Failed to load tag index:', error);
        this.tagIndex = {};
      }
    }
  }

  // Save tag index to file
  saveTagIndex() {
    try {
      fs.writeFileSync(TAG_INDEX_PATH, JSON.stringify(this.tagIndex), 'utf8');
    } catch (error) {
      console.error('Failed to save tag index:', error);
    }
  }

  // Update tag index with new cache entry
  updateTagIndex(key, tags = []) {
    // Remove key from all existing tags
    for (const tag in this.tagIndex) {
      this.tagIndex[tag] = this.tagIndex[tag].filter(k => k !== key);
      if (this.tagIndex[tag].length === 0) {
        delete this.tagIndex[tag];
      }
    }
    
    // Add key to new tags
    for (const tag of tags) {
      if (!this.tagIndex[tag]) {
        this.tagIndex[tag] = [];
      }
      if (!this.tagIndex[tag].includes(key)) {
        this.tagIndex[tag].push(key);
      }
    }
    
    this.saveTagIndex();
  }

  async get(key) {
    try {
      const cachePath = this.getCachePath(key);
      if (fs.existsSync(cachePath)) {
        const content = fs.readFileSync(cachePath, 'utf8');
        return JSON.parse(content);
      }
    } catch (error) {
      console.error(`Cache get error for key ${key}:`, error);
    }
    return null;
  }

  async set(key, data) {
    try {
      const cachePath = this.getCachePath(key);
      const cacheData = { ...data, timestamp: Date.now() };
      
      // Update tag index
      if (data.tags && Array.isArray(data.tags)) {
        this.updateTagIndex(key, data.tags);
      }
      
      fs.writeFileSync(cachePath, JSON.stringify(cacheData), 'utf8');
      return true;
    } catch (error) {
      console.error(`Cache set error for key ${key}:`, error);
      return false;
    }
  }

  async revalidateTag(tag) {
    try {
      if (!this.tagIndex[tag]) {
        return true; // Tag not found in index
      }
      
      const keys = [...this.tagIndex[tag]];
      delete this.tagIndex[tag];
      this.saveTagIndex();
      
      await Promise.all(keys.map(async (key) => {
        const cachePath = this.getCachePath(key);
        if (fs.existsSync(cachePath)) {
          try {
            await fs.promises.unlink(cachePath);
          } catch (error) {
            console.error(`Failed to delete cache file for key ${key}:`, error);
          }
        }
      }));
      
      return true;
    } catch (error) {
      console.error(`Revalidation error for tag ${tag}:`, error);
      return false;
    }
  }

  getCachePath(key) {
    const hash = createHash('md5').update(key).digest('hex');
    return path.join(CACHE_DIR, `${hash}.json`);
  }
}

module.exports = CustomCacheHandler;
