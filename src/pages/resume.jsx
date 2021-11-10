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
import SectionLanguages from '../components/section-languages';
import SectionEducation from '../components/section-education';

const Resume = ({ data }) => {
  const about = get(data, 'site.siteMetadata.profile', false);
  const skills = get(data, 'site.siteMetadata.skills', false);
  const education = get(data, 'site.siteMetadata.education', false);
  const languages = get(data, 'site.siteMetadata.languages', false);
  const projects = get(data, 'site.siteMetadata.projects', false);
  const certifications = get(data, 'site.siteMetadata.certifications', false);

  const classes = {
    btn: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
  };

  return (
    <Layout>
      <SEO title="Resume" />
      <Header metadata={data.site.siteMetadata} />
      {about && <SectionProfile about={about} />}
      {education && education.length && (
        <SectionEducation education={education} />
        )}
      {skills && skills.length && <SectionSkills skills={skills} />}
      <SectionExperience experience={certifications}/>
      {projects && projects.length && <SectionProjects projects={projects} />}
      <SectionLanguages languages={languages} />
      <br /><a href="https://drive.google.com" className={classes.btn}>Open as PDF</a>
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
        languages {
          id
          lg
        }
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
        certifications {
          name
          description
          link
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
