/* eslint-disable react/no-array-index-key */
import React from 'react';
import Button from './Button';

const GroupButtons = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

function displayButtons(buttons) {
  return buttons.map((group, groupID) => (
    <div key={`group${groupID}`}>
      { group.map((btn, btnID) => <Button key={`btn${btnID}`} name={btn} />) }
    </div>
  ));
}

function ButtonPanel() {
  return (
    <>
      { displayButtons(GroupButtons) }
    </>
  );
}

export default ButtonPanel;
