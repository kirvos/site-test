import { StructureBuilder, StructureResolverContext } from 'sanity/structure'
import { PreviewPane } from './preview-pane'

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('コンテンツ')
    .items([
      // 記事一覧（プレビュー付き）
      S.listItem()
        .title('投稿')
        .child(
          S.documentTypeList('post')
            .title('投稿')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('post')
                .views([
                  // デフォルトのフォームビュー
                  S.view.form().title('編集'),
                  // プレビューペイン
                  S.view
                    .component(PreviewPane)
                    .title('プレビュー')
                    .icon(() => '👁'),
                ])
            )
        ),
      
      // その他のドキュメントタイプ
      ...S.documentTypeListItems().filter(
        (listItem) => !['post'].includes(listItem.getId()!)
      ),
    ])