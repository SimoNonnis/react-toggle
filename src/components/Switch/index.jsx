import React from 'react';
import { ToggleInput, ToggleBtn } from './style';

const Switch = ({ on, onClick }) => {
  return (
    <div>
      <ToggleInput type="checkbox" checked={on} onChange={() => {}} />
      <ToggleBtn on={on} onClick={onClick} />
    </div>
  );
};

export default Switch;
