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
    dribbble: `https://www.dribbble.com/nusry/`,
    // Content of the About Me section
    about: `As early in my childhood, I remember fiddling with computers. Since then, I have learned a lot about computers. As soon as I finished school, I decided to pursue Information Technology as my major. I enjoyed learning more about topics and areas I did not know much about, especially programming and graphic designing. Over the course, I came to understand that the computers had much more to do with the world today than in the past. This motivated me to pursue in a never ending curiosity to explore the world of computers and programming.`,
    profile: `Creative designer & web developer who stands out. I’ve got a unique mix of creativity, time management, problem solving and technical skills. Excellent communicator and quick to grasp any topic.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    languages: [
      {
        id: '1',
        lg: 'English, Tamil, Sinhala',
      },
    ],
    projects: [
      {
        name: 'ePocket',
        description: 'A personal finance management web application',
        link: 'https://epocketweb.000webhostapp.com/',
      },
      {
        name: 'youtube-light',
        description:
          'Watch YouTube without any distractions using this web application',
        link: 'https://ytlight.netlify.app',
      },
      {
        name: 'Railway Ticket Reservation System',
        description: 'Ticket reservation system using C# for group project',
        link: 'resume',
      },
      {
        name: 'Body Fantasy',
        description: 'A website for a cosmetic store built for a group project',
        link: 'http://bodyfantasy.infinityfreeapp.com/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        icon: '💪',
        name: 'Strength',
        description:
          'Ability to self learn ⦁ Quick to grasp topics ⦁ Motivated ⦁ IT Graduate',
      },
      {
        icon: '📉',
        name: 'Weaknesses',
        description:
          'Not satisfied until a work is done ⦁ Perfectionist ⦁ Inadequate social media presence',
      },
      {
        icon: '🎯',
        name: 'Opportunities',
        description:
          'Further study options after Bachelors ⦁ Job opportunities booming in IT sector ⦁ Expansion of IT industry ⦁ Availability of online education',
      },
      {
        icon: '⛔',
        name: 'Threats',
        description:
          "Competition from fellow developers ⦁ Rapidly evolving technology ⦁ Country's slower adaptation to IT",
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description: 'HTML, CSS, JavaScript (ES6+), Node.js, React, PHP',
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
        description: 'Linux, Server Management, API design, GIT',
      },
    ],
    education: [
      {
        name: 'Rajarata University of Sri Lanka',
        field: 'B.Sc in Information Technology (2017-Present)',
        year: '2017-Present',
      },
      {
        name: "St. Anthony's College Kandy",
        field: 'G.C.E. A/L (2014-2016)',
        year: '2014-2016',
      },
      {
        name: 'Vision International School Kandy',
        field: 'G.C.E. O/L (2002-2013)',
        year: '2002-2013',
      },
    ],
    certifications: [
      {
        name: 'Responsive Web Design',
        description: 'FreeCodeCamp · Issued January 2019',
        link:
          'https://www.freecodecamp.org/certification/nusrynizam/responsive-web-design',
      },
      {
        name: 'Foundations of User Experience (UX) Design',
        description: 'Coursera · Issued May 2021',
        link:
          'https://www.coursera.org/account/accomplishments/certificate/EQ7DQ6XPXV25',
      },
      {
        name: 'Technical Support Fundamentals',
        description: 'Coursera · Issued July 2021',
        link:
          'https://www.coursera.org/account/accomplishments/certificate/VHE3W8XCZH2T',
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
