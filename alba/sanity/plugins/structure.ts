import { StructureBuilder, StructureResolverContext } from 'sanity/structure'
import { PreviewPane } from './preview-pane'

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .id('root')
    .title('コンテンツ')
    .items([
      // 記事一覧（プレビュー付き）
      S.listItem()
        .id('posts')
        .title('投稿')
        .child(
          S.documentTypeList('post')
            .title('投稿')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('post')
                .views([
                  // 分割ビュー（編集とプレビューを同時表示）
                  S.view
                    .form()
                    .id('editor')
                    .title('編集')
                    .icon(() => '✏️'),
                  // プレビューのみのビュー
                  S.view
                    .component(PreviewPane)
                    .id('preview')
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