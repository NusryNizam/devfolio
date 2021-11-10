import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionLanguages = ({ languages }) => {
  return (
    <Section title="Languages">
      {/* <div className="mb-6">
        <p>{languages}</p>
      </div> */}

      {languages.map((language) => (
        <SummaryItem key={language.id} description={language.lg} />
      ))}
    </Section>
  );
};

export default SectionLanguages;
