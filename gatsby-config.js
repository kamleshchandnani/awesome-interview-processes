module.exports = {
  siteMetadata: {
    title: `Awesome Interview Processes 🤩`,
    author: `Kamlesh Chandnani`,
    siteUrl: `https://awesomeinterviewprocesses.com/`,
    description: `List and details of companies who have really amazing interview process`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_kamlesh_`,
      },
      {
        name: `github`,
        url: `https://github.com/kamleshchandnani/awesome-interview-processes`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: "content/companies",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Awesome Interview Processes 🤩`,
        short_name: `🤩`,
        start_url: `/`,
        background_color: `#f7fafc`,
        theme_color: `#f7fafc`,
        display: `standalone`,
        icon: `content/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149382401-1",
      },
    },
  ],
};
