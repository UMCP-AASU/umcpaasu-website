export default {
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        {
            name: 'header',
            title: 'About Page Header',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'About Page Subtitle',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Background Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
    ],
}