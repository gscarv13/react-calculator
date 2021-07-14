/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/stylesheet.css';

const GroupButtons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const displayButtons = (buttons, handleClick) => buttons.map((group, groupID) => (
  <div
    key={`group${groupID}`}
    className="row d-flex"
  >
    { group.map((btn, btnID) => {
      const isWide = btn === '0';
      return (
        <Button
          key={`btn${btnID}`}
          name={btn}
          handleClick={handleClick}
          color={(btnID < 3 && btn !== '=') ? '#303136' : '#1991ff'}
          wide={isWide}
        />
      );
    })}
  </div>
));

const ButtonPanel = (props) => {
  const handleClick = (btnName) => props.clickHandler(btnName);
  return (
    <div className="d-flex flex-column border" data-testid="button-panel">
      { displayButtons(GroupButtons, handleClick) }
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
