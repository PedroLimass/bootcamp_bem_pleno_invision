import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 434px;
    min-height: 257px;
  }

  h1 {
    font: normal normal normal 30px/38px Mulish;
    color: var(--color-Invision-secondary);
    align-self: center;
    margin-bottom: 47px;
  }

  a {
    text-decoration: none;
    color: var(--color-Invision-secondary);
    align-self: flex-end;
    font: normal normal normal 14px/18px Mulish;
    cursor: pointer;
    margin-bottom: 30px;
  }

  label {
    width: 100%;
    font: normal normal normal 14px/18px Mulish;
    color: var(--color-Invision-secondary);
    margin-bottom: 4px;
  }

  input:first-of-type {
    margin-bottom: 18px;
  }

  input {
    width: 100%;
    height: 42px;
    padding-left: 20px;
    border-style: none;
    font: normal normal normal 16px/20px Mulish;
    border-bottom: 1px solid var(--color-Invision-secondary);
  }

  p {
    margin-top: 1.5rem;
    font: normal normal normal 16px/20px Mulish;
  }

  #createLink{
      text-decoration: underline;
      color: var(--color-Invision-primary);
  }
`;

export const OrModel = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 0;
  font: normal normal normal 14px/18px Mulish;
  hr {
    width: 50%;
    background: var(--color-Invision-secondary);
    border: 0.5px solid var(--color-Invision-secondary);
    margin: 0 20px;
  }
`;
