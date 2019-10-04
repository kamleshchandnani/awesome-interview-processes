module.exports = {
  siteMetadata: {
    title: `Awesome Interview Process 🤩`,
    author: `Kamlesh Chandnani`,
    description: `List and details of companies who have really amazing interview process`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_kamlesh_`
      },
      {
        name: `github`,
        url: `https://github.com/kamleshchandnani/awesome-interview-process`
      }
    ]
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: "content/companies"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Awesome Interview Process 🤩`,
        short_name: `🤩`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `content/assets/favicon.png`
      }
    }
  ]
};
