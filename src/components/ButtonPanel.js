/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const GroupButtons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const displayButtons = (buttons, handleClick) => buttons.map((group, groupID) => (
  <div key={`group${groupID}`}>
    { group.map((btn, btnID) => <Button key={`btn${btnID}`} name={btn} handleClick={handleClick} />) }
  </div>
));

const ButtonPanel = (props) => {
  const handleClick = (btnName) => props.clickHandler(btnName);
  return (
    <>
      { displayButtons(GroupButtons, handleClick) }
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
