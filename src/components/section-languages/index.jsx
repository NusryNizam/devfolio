import React from 'react';

import Section from '../section';

const SectionLanguages = ({ lang }) => {
  return (
    <Section title="Languages">
      <div className="mb-6">
        <p>{lang}</p>
      </div>
    </Section>
  );
};

export default SectionLanguages;
