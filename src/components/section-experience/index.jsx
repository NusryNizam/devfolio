import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';
import SummaryItemSwot from '../summary-item-swot';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="SWOT Analysis">
      {experience.map((item) => {
        return (
          <div>
            <p>{item.icon}</p>
            <SummaryItemSwot
              key={item.name}
              name={item.name}
              description={item.description}
              link={item.link}
            />
          </div>
        );
      })}
    </Section>
  );
};

export default SectionExperience;
