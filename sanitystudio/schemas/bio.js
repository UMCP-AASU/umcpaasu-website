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
            name: "boardYear",
            title: "Board Year",
            type: "string",
            description:
                "The year the person was on board. For example: 2019-2020",
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
            // see https://www.sanity.io/docs/block-type
            name: "description",
            title: "Event Description",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ],
}
