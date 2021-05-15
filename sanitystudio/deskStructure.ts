// Created following https://youtu.be/YMX2TX3vIAc
import S from "@sanity/desk-tool/structure-builder"

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Site Settings")
                .child(
                    S.document()
                        .schemaType("siteSettings")
                ),
            S.divider(),
            S.listItem().title("Bios by Board Year").child(
                S.documentTypeList('boardYear')
                .title('Bios by Board Year')
                .child(boardYear => S.documentList().title("Bios")
                .filter("_type == 'bio' && $boardYear == boardYear._ref"))
            ),
            ...S.documentTypeListItems().filter(
                (item) => !["siteSettings"].includes(item.getId())
            ),
        ])
