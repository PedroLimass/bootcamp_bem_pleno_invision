import styled from "styled-components";

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
  flex: 1;
  background-color: var(--color-Invision-primary);
`;

export const FormSide = styled.div`
  flex: 1;
  background-color: var(--color-Invision-white);

  .titleFixed {
    display: flex;
    justify-content: flex-start;
    font: var(--invision-title-font);
    color: var(--secondary-initial-text);
    margin-left: 60%;
    margin-top: 5%;
  }
`;
