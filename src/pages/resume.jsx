import { graphql } from 'gatsby';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';

const Resume = ({ data }) => {
    //   const posts = data.allMarkdownRemark.edges;
    //   const noBlog = !posts || !posts.length;

    //   if (!posts || !posts.length) {
    //     return <NotFound />;
    //   }

  return (
    <Layout>
      <SEO title="Resume" />
      <Header metadata={data.site.siteMetadata} />
      <h1>This is the resume</h1>
    </Layout>
  );
};

export default Resume;
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
        about
        author
        github
        linkedin
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;