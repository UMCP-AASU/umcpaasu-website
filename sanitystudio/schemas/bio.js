export default {
    name: "bio",
    title: "Bio",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "position",
            title: "Position",
            type: "string",
        },
        {
            name: "major",
            title: "Major(s)",
            type: "tags",
        },
        {
            name: "propic",
            title: "Profile Picture",
            type: "image",
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ],
}
