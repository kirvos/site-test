import { StructureBuilder } from 'sanity/structure'
import { PreviewPane } from './preview-pane'

export const structure = (S: StructureBuilder) =>
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
            .id('post-list')
            .title('投稿')
            .child((documentId) =>
              S.document()
                .documentId(documentId)
                .schemaType('post')
                .views([
                  // 編集ビュー
                  S.view
                    .form()
                    .id('editor')
                    .title('編集')
                    .icon(() => '✏️'),
                  // プレビュービュー
                  S.view
                    .component(PreviewPane)
                    .id('preview')
                    .title('プレビュー')
                    .icon(() => '👁'),
                ])
            )
        ),
      
      // その他のドキュメントタイプ
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !['post'].includes(listItem.getId()!)
      ),
    ])