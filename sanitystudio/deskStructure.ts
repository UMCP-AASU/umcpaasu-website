// Created following https://youtu.be/YMX2TX3vIAc
import S from "@sanity/desk-tool/structure-builder"

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Site Settings")
                .child(S.document().schemaType("siteSettings")),
            S.listItem().title("Board Years").child(
                S.documentTypeList("boardYear")
            ),
            S.divider(),
            // Filtering bios by Board year
            S.listItem()
                .title("Bios by Board Year")
                .child(
                    S.documentTypeList("boardYear")
                        .title("Bios by Board Year")
                        .child((boardYear) =>
                            S.documentList()
                                .title("Bios")
                                .filter(
                                    "_type == 'bio' && $boardYear == boardYear._ref"
                                )
                                .params({ boardYear })
                        )
                ),
            // The rest of the
            ...S.documentTypeListItems().filter(
                (item) =>
                    !["siteSettings", "boardYear", "media.tag", "bio"].includes(
                        item.getId()
                    )
            ),
        ])
