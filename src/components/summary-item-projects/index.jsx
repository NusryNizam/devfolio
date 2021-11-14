import { Link } from 'gatsby';
import React from 'react';

const classes = {
    wrapper: 'mb-6',
    name: 'font-semibold text-gray-900 pb-1',
    description: 'text-md text-gray-600 font-normal',
    container: 'shadow-xl rounded-lg max-w-lg',
    cl: 'rounded-t-lg',
    info: 'p-4',
};

const SummaryItemProjects = ({ name, description, img, link = false, internal = false}) => {
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
            <div className={classes.container}>
                <img className={classes.cl} src={img} width="auto" />
                <div className={classes.info}>
                    <h3
                        className={`${classes.name} ${link ? 'text-blue-600 underline hover:underline hover:text-black' : ''
                            }`}
                    >
                        {link ? linkContent : name}
                    </h3>
                    <p className={classes.description}>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SummaryItemProjects;
