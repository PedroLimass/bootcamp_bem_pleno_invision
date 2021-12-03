import styled, { css } from 'styled-components';
import sizes from '../../utils/screenSizes';

export const Container = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  display: flex;
  width: 50vw;
  flex-direction: column;
  align-content: center;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: ${sizes.ipadPro}) {
    margin-top: 10px;
  }

  color: var(--color-Invision-white);
  img {
    width: 40vw;
    height: 60vh;
  }
  h1 {
    color: var(--color-Invision-white);
    font: var(--dafault-Invision-bigger);
    margin-top: 10px;
  }
  p {
    max-width: 400px;
    text-align: center;
    margin-top: 10px;

    @media (min-width: ${sizes.notebook}) {
      font: var(--dafault-Invision-small);
    }

    @media (min-width: ${sizes.desktop}) {
      font: var(--dafault-Invision-semi-bold);
    }
  }
`;

export const Buttons = styled.div`
  flex-direction: row;
`;

export const Button = styled.button`
  ${props =>
    props.isActive
      ? css`
          width: 25px;
        `
      : css`
          width: 10px;
          opacity: 0.5;
        `};
  height: 10px;
  background: var(--color-Invision-white) 0% 0% no-repeat padding-box;
  border: none;
  cursor: pointer;
  margin: 40px 5px;
  border-radius: 50px;
`;
