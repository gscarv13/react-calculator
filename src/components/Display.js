import React from 'react';
import PropTypes from 'prop-types';
import '../styles/stylesheet.css';

function Display(props) {
  const { result } = props;
  return (
    <div className="display" data-testid="display">
      { result }
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
