import React from 'react';

import Section from '../section';
import SummaryItemProjects from '../summary-item-projects';

const SectionProjects = ({ projects }) => {
  if (!projects.length) return null;

  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItemProjects
          key={project.name}
          name={project.name}
          description={project.description}
          link={project.link}
          img={project.img}
        />
      ))}
    </Section>
  );
};

export default SectionProjects;
