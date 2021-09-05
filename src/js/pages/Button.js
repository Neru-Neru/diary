import React, { useState } from 'react';

const Button = (props) => {
  const BtnClick = () => {
    props.onClick();
  };

  return (
    <div>
      <button onClick={BtnClick}>ボタン</button>
    </div>
  );
};

export default Button;
