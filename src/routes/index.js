import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SingIn from "../pages/SignIn/index";
import SignUp from "../pages/SignUp/index";

import * as S from "./styles";
import GlobalStyle from '../styles/global';

const routes = () => {
  return (
    <S.Container>
      <S.CarroselSide>
        <p>asdasd</p>
      </S.CarroselSide>
      <S.FormSide>
        <h1 className='titleFixed'>Invision</h1>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={SingIn} />
            <Route path="/SignUp" component={SignUp} />
          </Switch>
          <GlobalStyle/>
        </BrowserRouter>
      </S.FormSide>
    </S.Container>
  );
};

export default routes;
