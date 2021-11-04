module.exports = {
    siteMetadata: {
        title: "Organization Website",
    },
    plugins: [
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "ejt9tnx5",
                dataset: "production",
            },
        },
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        "gatsby-plugin-typescript",
        "gatsby-plugin-typegen",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Organization Website",
                short_name: "Org Website",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "static/logo.png", // This path is relative to the root of the site.
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        "gatsby-plugin-offline",
    ],
}
