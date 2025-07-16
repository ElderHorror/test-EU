import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
 
export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
 
  // ⚠️ The below code is for App Router Route Handlers only
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return new NextResponse(
      JSON.stringify({ message: 'Missing BLOB_READ_WRITE_TOKEN' }),
      {
        status: 401,
      },
    );
  }
 
  if (!filename || !request.body) {
    return NextResponse.json({ message: 'No file to upload.' }, { status: 400 });
  }
 
  const blob = await put(filename, request.body, {
    access: 'public',
    addRandomSuffix: true,
    allowOverwrite: false,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
 
  return NextResponse.json(blob);
}
