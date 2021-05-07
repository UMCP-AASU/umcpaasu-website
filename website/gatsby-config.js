module.exports = {
  siteMetadata: {
    title: "Organization Website",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "tbo3siwk",
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
  ],
};
