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
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`
    ],
}
