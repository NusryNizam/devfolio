import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import BlogPosts from '../components/blog-posts';
import Header from '../components/header';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NotFound from '../pages/404';
import SectionProfile from '../components/section-profile';
import SectionBlog from '../components/section-blog';
import SectionExperience from '../components/section-experience';
import SectionProjects from '../components/section-projects';
import SectionSkills from '../components/section-skills';
import SectionEducation from '../components/section-education';

const Resume = ({ data }) => {
  const about = get(data, 'site.siteMetadata.profile', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const education = get(data, 'site.siteMetadata.education', false);

  return (
    <Layout>
      <SEO title="Resume" />
      <Header metadata={data.site.siteMetadata} />
      <h1>This is the resume</h1>
      {about && <SectionProfile about={about} />}
      {education && education.length && <SectionEducation education={education}></SectionEducation>}
      {skills && skills.length && <SectionSkills skills={skills} />}
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
        profile
        projects {
          name
          description
          link
        }
        experience {
          name
          description
          link
        }
        skills {
          name
          description
        }
        education {
          name
          field
          year
        }
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