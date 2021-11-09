module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Nusry Nizam',
    // Main Site Title
    title: `Nusry Nizam | Developer`,
    // Description that goes under your name in main bio
    description: ``,
    // Optional: Twitter account handle
    author: `nusrynizam`,
    // Optional: Github account URL
    github: `https://github.com/NusryNizam`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/nusrynizam/`,
    // Content of the About Me section
    about: `As early in my childhood, I remember fiddling with computers. Since then, I have learned a lot about computers despite the formal education. As soon as I finished school, I decided to pursue Information Technology as my major. I enjoyed learning more about topics and areas I did not know much about, specially programming and graphic designing. I enjoy self-learning. Over the course, I came to understand that the computers had much more to do with the world today than in the past. This motivated me to pursue in a never ending curiosity to explore the world of computers and programming.`,
    profile: `Creative designer & web developer who stands out. I’ve got a unique mix of creativity, time management, problem solving and technical skills. Excellent communicator and quick to grasp any topic.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'ePocket',
        description:
          'A personal finance management web application',
        link: 'https://nusrynizam.github.io/epocket/',
      },
      {
        name: 'ChromeExtensionKit',
        description:
          'Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates',
        link: 'https://chromeextensionkit.com/?ref=devfolio',
      },
      {
        name: 'Another Cool Project',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit ducimus perferendis',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Acme Corp',
        description: 'Full-Stack Developer, February 2020 - Present',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Globex Corp',
        description: 'Full-Stack Developer, December 2017 - February 2020',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
      {
        name: 'Hooli',
        description: 'Full-Stack Developer, May 2015 - December 2017',
        link: 'https://github.com/RyanFitzgerald/devfolio',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'HTML, CSS, JavaScript (ES6+), Node.js, React, PHP',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Design',
        description: 'Graphic Design, Typography, User Interface Design',
      },
      {
        name: 'Other',
        description:
          'Linux, Server Management, API design, GIT',
      },
    ],
    education: [
      { 
        name: 'Rajarata University of Sri Lanka',
        field: 'B.Sc in Information Technology (2017-Present)',
        year: '2017-Present',
      },
      { 
        name: 'St. Anthony\'s College Kandy',
        field: 'G.C.E. A/L (2014-2016)',
        year: '2014-2016',
      },
      { 
        name: 'Vision International School Kandy',
        field: 'G.C.E. O/L (2002-2013)',
        year: '2002-2013',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
