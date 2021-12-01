import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --color-Invision-primary: #A9C5BA;
    --color-Invision-secondary: #707070;
    --color-Invision-white: #FFFFFF;    
    --color-Invision-black: #000000;

    --size-mobile: '600px';
    --size-ipad: '768px';
    --size-ipadPro: '1024px';
    --size-notebook: '1200px';
    --size-desktop: '1800px';
  

    --default-font-weight: 500;
    --google-font-settings: normal normal normal 18px/22px Lato;
    --default-font-components: 16px 'Mulish';
    --default-font-text: 15px;
    --invision-title-font: normal normal 900 35px/48px Lato;
  }

`;
