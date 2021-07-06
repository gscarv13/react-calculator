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

function displayButtons(buttons, handler) {
  return buttons.map((group, groupID) => (
    <div key={`group${groupID}`}>
      { group.map((btn, btnID) => <Button key={`btn${btnID}`} name={btn} clickHandler={handler} />) }
    </div>
  ));
}

function ButtonPanel(props) {
  const { clickHandler } = props;
  return (
    <>
      { displayButtons(GroupButtons, clickHandler) }
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
