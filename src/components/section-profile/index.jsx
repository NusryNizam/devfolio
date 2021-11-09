import React from 'react';

import Section from '../section';

const SectionProfile = ({ about }) => {
  return (
    <Section title="Profile">
      <div className="mb-6">
        <p>{about}</p>
      </div>
    </Section>
  );
};

export default SectionProfile;
