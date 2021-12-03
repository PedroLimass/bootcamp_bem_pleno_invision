import styled from 'styled-components';
import sizes from '../utils/screenSizes';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-Invision-primary);

  @media all and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const CarroselSide = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--color-Invision-primary);

  @media (max-width: ${sizes.ipadPro}) {
      display: none;
    }
`;

export const FormSide = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--color-Invision-white);

  .titleFixed {
    z-index: 10;
    position: absolute;
    font: var(--invision-title-font);
    color: var(--secondary-initial-text);
    right: 7%;
    top: 10%;
    
    @media (min-width: ${sizes.notebook}) {
      right: 7%;
      top: 5%;      
    }

    @media (max-width: ${sizes.ipad}) {
      right: 5%;
      top: 3%;      
    }

    @media (max-width: ${sizes.mobile}) {
      right: 2%;
      top: 2%;      
    }
    
  }
`;
