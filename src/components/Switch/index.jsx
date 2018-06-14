import React from 'react';
import { ToggleInput, ToggleBtn } from './style';

const Switch = ({ on }) => {
  return (
    <div>
      <ToggleInput type="checkbox" />
      <ToggleBtn on={on} />
    </div>
  );
};

export default Switch;
