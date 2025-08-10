import { redirect } from 'next/navigation'

export async function GET() {
  // プレビューモードを無効にしてホームページにリダイレクト
  const response = redirect('/')
  response.headers.set('Set-Cookie', 'sanity-preview=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0')
  
  return response
}