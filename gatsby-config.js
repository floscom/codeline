module.exports = {
    siteMetadata: {
        title: `CODELINE.co`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `./src/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `rg5af5enkqhl`,
                accessToken: `d3bb90c2411ae015cb73d34a1ea4634a69b77b2b0e7d41a19518b13dbc600aea`,
            },
        },
        `gatsby-transformer-remark`
    ],
}
