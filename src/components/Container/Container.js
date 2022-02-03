import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ title, children }) => {
  return (
    <div className="Container">
      {title && <h1>{title} </h1>}

      <div>{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;