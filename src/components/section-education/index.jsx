import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionEducation = ({ education }) => {
  return (
    <Section title="Education">
      {education.map((field) => (
        <SummaryItem
          key={field.name}
          name={field.name}
          description={field.field}
        //   description={field.year}
        />
      ))}
    </Section>
  );
};

export default SectionEducation;
