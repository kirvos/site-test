import { NextResponse } from 'next/server'

export async function GET() {
  // プレビューモードを無効にしてホームページにリダイレクト
  const response = NextResponse.redirect(new URL('/', process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'))
  response.headers.set('Set-Cookie', 'sanity-preview=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0')
  
  return response
}