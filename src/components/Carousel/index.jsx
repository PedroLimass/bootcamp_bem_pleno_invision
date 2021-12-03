import React, {useEffect, useState} from 'react';

import carousel_1 from '../../assets/Data.png';
import carousel_2 from '../../assets/data1.svg';
import carousel_3 from '../../assets/data2.svg';
import carousel_4 from '../../assets/data3.svg';

import * as S from './styles';

const Carousel = () => {
  const [images] = useState([carousel_1, carousel_2, carousel_3, carousel_4]);
  const [buttonActivation, setButtonActivation] = useState([
    true,
    false,
    false,
    false,
  ]);
  const [imageIndex, setImageIndex] = useState(0);
  // necessário refatorar timeOut
  var timeOut: number;

  const handleButtonActivation = (index: number) => {
    const arr = [false, false, false, false];
    arr[index] = true;

    setButtonActivation(arr);
    setImageIndex(index);
    clearTimeout(timeOut);
  };

  const handleAutoChange = () => {
    timeOut = setTimeout(() => {
      if (imageIndex === 3) {
        handleButtonActivation(0);
      } else {
        handleButtonActivation(imageIndex + 1);
      }
    }, 3000);
  };

  useEffect(() => {
    handleAutoChange();
  }, [imageIndex]);
  return (
    <S.Container img={images[imageIndex]}>
      <img src={images[imageIndex]} alt="img carousel" />
      <h1>Marcenas mattis egestas</h1>
      <p>
        Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse
        porta.
      </p>

      <S.Buttons>
        <S.Button
          isActive={buttonActivation[0]}
          onClick={() => {
            handleButtonActivation(0);
          }}
        />
        <S.Button
          isActive={buttonActivation[1]}
          onClick={() => {
            handleButtonActivation(1);
          }}
        />
        <S.Button
          isActive={buttonActivation[2]}
          onClick={() => {
            handleButtonActivation(2);
          }}
        />
        <S.Button
          isActive={buttonActivation[3]}
          onClick={() => {
            handleButtonActivation(3);
          }}
        />
      </S.Buttons>
    </S.Container>
  );
};

export default Carousel;
