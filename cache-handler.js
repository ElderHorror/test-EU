// Custom cache handler for Next.js
// This file implements a custom caching strategy to improve build and runtime performance

const { createHash } = require('crypto');
const fs = require('fs');
const path = require('path');

// Cache directory
const CACHE_DIR = path.join(process.cwd(), '.next', 'cache', 'custom');

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

/**
 * Custom cache handler implementation
 * @see https://nextjs.org/docs/app/api-reference/next-config-js/cacheHandler
 */
class CustomCacheHandler {
  constructor() {
    this.name = 'custom-cache-handler';
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
      fs.writeFileSync(cachePath, JSON.stringify(data), 'utf8');
      return true;
    } catch (error) {
      console.error(`Cache set error for key ${key}:`, error);
      return false;
    }
  }

  async revalidateTag(tag) {
    // Implement tag-based revalidation if needed
    // For now, we'll just log that revalidation was requested
    console.log(`Revalidate tag: ${tag}`);
    return true;
  }

  getCachePath(key) {
    const hash = createHash('md5').update(key).digest('hex');
    return path.join(CACHE_DIR, `${hash}.json`);
  }
}

module.exports = CustomCacheHandler;
