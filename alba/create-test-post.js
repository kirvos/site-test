import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'yc9q9o42',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN, // 要設定
})

async function createPost() {
  const doc = {
    _type: 'post',
    title: 'テスト記事',
    slug: {
      _type: 'slug',
      current: 'test-post-' + Date.now()
    },
    body: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            marks: [],
            text: 'これはテスト記事です。'
          }
        ],
        markDefs: [],
        style: 'normal'
      }
    ],
    publishedAt: new Date().toISOString()
  }

  try {
    const result = await client.create(doc)
    console.log('記事作成成功:', result)
  } catch (error) {
    console.error('記事作成エラー:', error)
  }
}

createPost()