import styled from 'styled-components';

export const Button = styled.button`
  width: 175px;
  height: 45px;
  border-radius: 100px;
  background-color: var(--color-Invision-secondary);
  color: var(--color-Invision-white);
  font: var(--dafault-Invision-bold);
  border: none;
  text-align: center;

  margin-top: ${props => props.mt};

  :hover {
    cursor: pointer;
  }
  ${props => {
    if (props.setStyles === 'primary')
      return `         
            width: 263px;
            height: 45px;
            background-color: var(--color-Invision-white);
            color: var(--color-Invision-black);            
            font: normal normal normal 18px/22px Lato;
            box-shadow: 0px 3px 6px #00000029;            
        `;
  }}

  img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
    margin-right: 20px;
  }
`;
