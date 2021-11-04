// Created following https://youtu.be/YMX2TX3vIAc
import S from "@sanity/desk-tool/structure-builder"

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem().title("Site Settings").child(
                // Display the editor
                S.editor()
                    .id("siteSettings")
                    .schemaType("siteSettings")
                    // Create a document with the ID siteSettings
                    .documentId("siteSettings")
            ),
            S.divider(),
            S.listItem()
                .title("Pages")
                .child(
                    S.list()
                        .title("Pages")
                        .items([
                            S.listItem().title("Home Page").child(
                                S.document()
                                    .schemaType("homePage")
                                    // Create a document with the ID siteSettings
                                    .documentId("homePage")
                            ),
                            S.listItem().title("About Page").child(
                                S.document()
                                    .schemaType("aboutPage")
                                    // Create a document with the ID siteSettings
                                    .documentId("aboutPage")
                            ),
                            S.listItem().title("Events Page").child(
                                S.document()
                                    .schemaType("eventsPage")
                                    // Create a document with the ID siteSettings
                                    .documentId("eventsPage")
                            ),
                            S.listItem().title("Board Page").child(
                                S.document()
                                    .schemaType("boardPage")
                                    // Create a document with the ID siteSettings
                                    .documentId("boardPage")
                            ),
                            S.listItem().title("Contact Page").child(
                                S.document()
                                    .schemaType("contactPage")
                                    // Create a document with the ID siteSettings
                                    .documentId("contactPage")
                            ),
                        ])
                ),
            S.listItem()
                .title("Board Years")
                .child(S.documentTypeList("boardYear")),
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
            S.listItem()
                .title("Events by Board Year")
                .child(
                    S.documentTypeList("boardYear")
                        .title("Events by Board Year")
                        .child((boardYear) =>
                            S.documentList()
                                .title("Events")
                                .filter(
                                    "_type == 'event' && $boardYear == boardYear._ref"
                                )
                                .params({ boardYear })
                        )
                ),
            // The rest of the
            ...S.documentTypeListItems().filter(
                (item) =>
                    ![
                        "siteSettings",
                        "homePage",
                        "aboutPage",
                        "eventsPage",
                        "boardPage",
                        "contactPage",
                        "boardYear",
                        "media.tag",
                        "bio",
                        "bioPortableText",
                        "eventPortableText",
                    ].includes(item.getId())
            ),
        ])
