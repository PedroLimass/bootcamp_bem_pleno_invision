import styled from 'styled-components';
import sizes from '../../utils/screenSizes';

export const Container = styled.div`
  *:focus {
    outline: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${sizes.mobile}) {
    margin-top: 15%;
  }

  @media (min-width: ${sizes.ipad}) {
    margin-top: 15%;
  }

  @media (min-width: ${sizes.desktop}) {
    margin-top: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    min-width: 434px;
    min-height: 257px;

    @media (max-width: ${sizes.mobile}) {
      padding: 0 2.2rem;
    }
  }

  h1 {
    font: var(--dafault-Invision-bigger);
    color: var(--color-Invision-secondary);
    align-self: center;

    @media (min-width: ${sizes.ipad}) {
      margin-bottom: 10px;
    }

    @media (min-width: ${sizes.desktop}) {
      margin-bottom: 50px;
    }

    @media (max-width: ${sizes.mobile}) {
      margin-top: 25px;
      margin-bottom: 22px;
    }
  }

  a {
    text-decoration: none;
    color: var(--color-Invision-secondary);
    align-self: flex-end;
    font: var(--dafault-Invision-smaller);
    cursor: pointer;
    margin-bottom: 30px;
  }

  label {
    width: 100%;
    font: var(--dafault-Invision-smaller);
    color: var(--color-Invision-secondary);
    margin-bottom: 4px;
  }

  input:first-of-type {
    margin-bottom: 9px;

    @media (min-width: ${sizes.desktop}) {
      margin-bottom: 18px;
    }
  }

  input {
    width: 100%;
    height: 42px;
    padding-left: 20px;
    border-style: none;
    font: var(--dafault-Invision-normal);
    border-bottom: 1px solid var(--color-Invision-secondary);
  }

  p {
    font: var(--dafault-Invision-normal);
  }
  .haveLogin {
    margin-top: 15px;
  }

  #redirectedLink {
    text-decoration: underline;
    color: var(--color-Invision-primary);
  }

  .termsAndCondicions {
    margin-top: 10px;
    text-align: center;
    font: var(--dafault-Invision-small);
    color: var(--color-Invision-secondary);

    span {
      color: var(--color-Invision-primary);
      text-decoration: underline;
    }
  }

  .formError {
    margin-top: -5px;
    margin-bottom: 14px;
    z-index: 1;
    width: 100%;
    color: red;
  }

  #haveLogin {
    align-self: center;
    margin-top: 1.5rem;
    font: var(--dafault-Invision-normal);

    strong {
      color: var(--color-Invision-primary);
    }

    span {
      text-decoration: underline;
    }
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  input {
    ${props => {
      if (props.borderError)
        return `         
        border-bottom: 1px solid red;        
        `;
    }}
  }
`;

export const OrModel = styled.div`
  width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  font: var(--dafault-Invision-smaller);
  hr {
    width: 50%;
    background: var(--color-Invision-secondary);
    border: 0.5px solid var(--color-Invision-secondary);
    margin: 0 20px;
  }
`;
