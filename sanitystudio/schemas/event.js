export default {
    name: "event",
    title: "event",
    type: "object",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "datetime",
            title: "Event Date and Time",
            type: "datetime",
        },
        {
            name: "image",
            title: "Event Cover Photo",
            type: "image",
        },
        {
            name: "tags",
            title: "Tags",
            type: "type",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ],
}
