module.exports = {
    pathPrefix: "/gatsby-test",
    plugins: [
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        // `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
            },
          }
    ]
}