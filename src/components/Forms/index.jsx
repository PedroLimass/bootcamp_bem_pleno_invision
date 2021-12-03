import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import GoogleLogo from '../../assets/Google__G__Logo.svg';
import Button from '../Button';

import * as S from './styles';

const Forms = () => {
  return (
    <S.Container>
      <h1>Welcome to Invision</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email('o e-mail está incorreto.')
            .required('*Este campo não pode ser vazio'),
          password: Yup.string().required('*Este campo não pode ser vazio.'),
        })}
      >
        {props => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <S.SubContainer borderError={touched.email && errors.email}>
                <label>
                  Users name or Email
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="text"
                    name="email"
                    // placeholder="Email"
                  />
                </label>
              </S.SubContainer>
              {touched.email && errors.email && (
                <span className="formError">{errors.email}</span>
              )}
              <S.SubContainer borderError={touched.password && errors.password}>
                <label>
                  Password
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    borderError={touched.password && errors.password}
                    type="password"
                    name="password"
                    // placeholder="Password"
                  />
                </label>
              </S.SubContainer>

              {touched.password && errors.password && (
                <span className="formError" style={{ color: 'red' }}>
                  {errors.password}
                </span>
              )}
              <a href="#">Forgot password?</a>

              <Button typeBtn="submit" valueText="Sign in" />
            </form>
          );
        }}
      </Formik>
      <S.OrModel>
        <hr />
        Or
        <hr />
      </S.OrModel>
      <Button
        typeBtn="submit"
        valueText="Sign in with Google"
        setStyles="primary"
        src={GoogleLogo}
      />
      <Link to="/signup" id="createLink">
        Novo no <strong>Invision? </strong>
        <span>Crie uma conta</span>
      </Link>
    </S.Container>
  );
};

export default Forms;
