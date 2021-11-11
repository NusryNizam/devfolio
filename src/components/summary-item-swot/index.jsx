import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  description: 'text-md text-gray-600 font-normal',
};

const SummaryItem = ({ name, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = (
      <a href={link} target="_blank" rel="noreferrer">
        {name}
      </a>
    );
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      {/* <p className={classes.description}>{description}</p> */}
      <ul className={classes.description}>
        {description.split(' ⦁ ').map((des) => {
          return <li>{des}</li>;
        })}
      </ul>
    </div>
  );
};

export default SummaryItem;
