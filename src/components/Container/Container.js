import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ title, children }) => {
  return (
    <div className="container">
      {title && <h1 className="container_title">{title} </h1>}

      <div>{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
