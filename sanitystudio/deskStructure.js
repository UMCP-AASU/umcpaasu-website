// Created following https://youtu.be/YMX2TX3vIAc
import S from "@sanity/desk-tool/structure-builder"

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItems()
                .title("Site Settings")
                .child(S.document().schemaType("siteSettings").documentId()),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => !["siteSettings"].includes(item.getId())
            ),
        ])
