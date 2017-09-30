const autoprefixer = require("autoprefixer");

module.exports = {
  siteMetadata: {
    title: "DailyDrip"
  },
  pathPrefix: "/gatsby-starter-grommet",
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "DailyDrip PWA",
        short_name: "DailyDrip",
        start_url: "/?utm_source=homescreen",
        background_color: "#4A90E2",
        theme_color: "#4A90E2",
        display: "standalone",
        icons: [
          {
            src: "favicons/android-chrome-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "favicons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "favicons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        runtimeCaching: [
          // these assets, let's cache them aggressively
          // We probably want these to check network first but this works
          // and at least shows some differences
          //
          {
            urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|mp4)$/,
            handler: `cacheFirst`
          },
          // Our js and css, we'd like to change them
          {
            urlPattern: /\.(?:js|css)$/,
            handler: `networkFirst`
          },
          //our API should always be checked for the latest episode
          {
            urlPattern: /dailydrip/,
            handler: `networkFirst`
          }
        ]
      }
    },
    {
      resolve: "custom-sass-loader",
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ["last 2 versions"]
          })
        ]
      }
    },
    "gatsby-plugin-react-helmet"
  ]
};
