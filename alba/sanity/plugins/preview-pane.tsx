import React, { useEffect, useRef, useState } from 'react'
import { definePlugin } from 'sanity'
import { DocumentActionComponent } from 'sanity'

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

// プレビューペイン用のiframeコンポーネント（リアルタイム更新対応）
export function PreviewPane({ document }: { document: any }) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [lastUpdate, setLastUpdate] = useState(Date.now())

  // ドキュメント更新時にiframeをリロード
  useEffect(() => {
    if (iframeRef.current && document.draft) {
      const timer = setTimeout(() => {
        if (iframeRef.current) {
          iframeRef.current.src = iframeRef.current.src
        }
      }, 1000) // 1秒後にリロード（頻繁すぎる更新を防ぐ）
      
      return () => clearTimeout(timer)
    }
  }, [document.draft?._updatedAt, document.published?._updatedAt])

  // スラッグが存在しない場合の表示
  const slug = document.published?.slug?.current || document.draft?.slug?.current
  if (!slug) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        color: '#666',
        backgroundColor: '#f7f7f7',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h3>プレビューなし</h3>
          <p>プレビューを表示するにはスラッグを設定してください</p>
        </div>
      </div>
    )
  }

  const previewUrl = `${BASE_URL}/api/preview?secret=${PREVIEW_SECRET}&slug=${slug}&t=${lastUpdate}`

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '40px',
        backgroundColor: '#f1f3f4',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '16px',
        fontSize: '12px',
        color: '#666',
        borderBottom: '1px solid #e1e3e4',
        zIndex: 1
      }}>
        <span>🔄 リアルタイムプレビュー - 自動更新中</span>
        <button
          onClick={() => {
            if (iframeRef.current) {
              iframeRef.current.src = iframeRef.current.src
            }
          }}
          style={{
            marginLeft: 'auto',
            marginRight: '16px',
            padding: '4px 8px',
            fontSize: '11px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          更新
        </button>
      </div>
      <iframe
        ref={iframeRef}
        src={previewUrl}
        style={{
          width: '100%',
          height: 'calc(100% - 40px)',
          border: 'none',
          borderRadius: '0 0 4px 4px',
          marginTop: '40px'
        }}
        title="記事プレビュー"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
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