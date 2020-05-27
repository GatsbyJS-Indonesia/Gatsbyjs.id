require(`dotenv`).config({
  path: `.env`
});

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // Of course you can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/master/themes/gatsby-theme-cara/gatsby-config.js
    siteTitle: `GatsbyJS Indonesia`,
    siteTitleAlt: `Komunitas GatsbyJS Indonesia`,
    siteHeadline: `GatsbyJS Indonesia`,
    siteUrl: `https://gatsbyjs.id/`,
    siteDescription: `Komunitas GatsbyJS Indonesia, pembawa perubahan besar untuk Bangsa dan Negara`,
    siteLanguage: `id`,
    siteImage: `/banner.jpg`,
    author: `@dannyeka`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      // See the theme's README for all available options
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cara - @lekoarts/gatsby-theme-cara`,
        short_name: `GatsbyJS-ID`,
        description: `Komunitas GatsbyJS Indonesia, pembawa perubahan besar untuk Bangsa dan Negara`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#663399`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
