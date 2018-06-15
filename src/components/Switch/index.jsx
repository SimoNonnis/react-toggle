import React from 'react';
import { ToggleInput, ToggleBtn } from './style';

const Switch = ({ on, ...props }) => {
  return (
    <div>
      <ToggleInput type="checkbox" checked={on} onChange={() => {}} />
      <ToggleBtn on={on} {...props} />
    </div>
  );
};

export default Switch;
