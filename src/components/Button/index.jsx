import React from 'react';
import * as S from './styles';

const Button = ({ valueText, typeBtn, setStyles, src, mt }) => {
  return (
    <S.Button type={typeBtn} setStyles={setStyles} mt={mt}>
      {src ? <img src={src} alt="Logo Google" /> : null}
      {valueText}
    </S.Button>
  );
};

export default Button;
