import { definePlugin } from 'sanity'
import { DocumentActionComponent, DocumentActionsContext } from 'sanity'

// プレビューペインの設定
const PREVIEW_SECRET = process.env.SANITY_PREVIEW_SECRET || 'alba-preview-secret-2025'
const BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000' 
  : 'https://your-production-domain.com'

// プレビューアクションコンポーネント
const PreviewAction: DocumentActionComponent = ({ id, type, draft, published }) => {
  if (type !== 'post' || !published?.slug?.current) {
    return null
  }

  return {
    label: 'プレビューを開く',
    icon: () => '👁',
    onHandle: () => {
      const previewUrl = `${BASE_URL}/api/preview?secret=${PREVIEW_SECRET}&slug=${published.slug.current}`
      window.open(previewUrl, '_blank')
    }
  }
}

// プレビューペイン用のiframeコンポーネント
export function PreviewPane({ document }: { document: any }) {
  if (!document.published?.slug?.current) {
    return (
      <div style={{ padding: '1rem' }}>
        <p>プレビューを表示するには記事を公開してください</p>
      </div>
    )
  }

  const previewUrl = `${BASE_URL}/api/preview?secret=${PREVIEW_SECRET}&slug=${document.published.slug.current}`

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <iframe
        src={previewUrl}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '4px'
        }}
        title="記事プレビュー"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  )
}

// プラグインの定義
export const previewPlugin = definePlugin({
  name: 'preview-pane',
  document: {
    actions: (prev, context) => {
      const { schemaType } = context
      if (schemaType === 'post') {
        return [...prev, PreviewAction]
      }
      return prev
    }
  }
})