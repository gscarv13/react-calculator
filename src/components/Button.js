import React from 'react';
import PropTypes from 'prop-types';
import '../styles/stylesheet.css';

const Button = (props) => {
  const {
    name, handleClick, color, wide,
  } = props;

  const style = {
    backgroundColor: color,
    width: wide ? '50%' : '25%',
  };

  return (
    <button
      type="button"
      onClick={() => handleClick(name)}
      className="btn"
      style={style}
      data-testid={name}
    >
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default Button;
