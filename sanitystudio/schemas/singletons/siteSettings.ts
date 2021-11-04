export default {
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Site Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'primaryColor',
            title: 'Site Primary Color',
            type: 'colorPicker',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'secondaryColor',
            title: 'Site Secondary Color',
            type: 'colorPicker',
            validation: (Rule) => Rule.required(),
        }
    ],
}
