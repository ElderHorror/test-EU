import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // 1. Verify the secret token from the webhook header
  const secret = process.env.CONTENTFUL_REVALIDATION_SECRET
  const providedSecret = request.headers.get('x-revalidation-secret')

  if (providedSecret !== secret) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }

  // 2. Invalidate the cache tag for blog posts.
  // This tells Next.js to refetch any data that uses this tag.
  revalidateTag('blogPosts')

  // 3. Return a success response
  return NextResponse.json({ revalidated: true, now: Date.now() })
}