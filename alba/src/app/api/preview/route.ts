import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')

  // シークレットトークンの検証
  if (secret !== process.env.SANITY_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 })
  }

  // slugが必要
  if (!slug) {
    return new Response('Missing slug', { status: 400 })
  }

  // プレビューモードを有効にして投稿ページにリダイレクト
  const response = redirect(`/posts/${slug}`)
  response.headers.set('Set-Cookie', 'sanity-preview=true; Path=/; HttpOnly; SameSite=Strict')
  
  return response
}