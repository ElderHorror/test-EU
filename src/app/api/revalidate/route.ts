import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import crypto from 'crypto'

// Contentful webhook handler
export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const signature = request.headers.get('x-contentful-signature')
    const secret = process.env.CONTENTFUL_WEBHOOK_SECRET

    // TEMPORARY: Skipping signature verification for development
    console.warn('SECURITY WARNING: Skipping signature verification - not recommended for production')

    // Parse webhook payload
    const payload = JSON.parse(body)
    const contentType = payload?.sys?.contentType?.sys?.id
    const entryId = payload?.sys?.id

    // Only handle blog post updates
    if (contentType === 'blogPost') {
      // Revalidate blog listing page
      revalidateTag('blog-list')
      
      // Revalidate specific blog post
      if (entryId) {
        revalidateTag(`blog-${entryId}`)
      }
      
      return NextResponse.json({
        revalidated: true,
        now: Date.now(),
        tags: [`blog-list`, `blog-${entryId}`]
      })
    }

    return NextResponse.json({
      message: 'Not a blog post update - skipping revalidation'
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { error: 'Error processing webhook' },
      { status: 500 }
    )
  }
}