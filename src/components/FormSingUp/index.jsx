import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import GoogleLogo from '../../assets/Google__G__Logo.svg';
import Button from '../Button';

import * as S from './styles';

const FormSingUp = () => {
  return (
    <S.Container>
      <h1>Getting Started</h1>
      <Formik
        initialValues={{
          fullName: 'Carolina Galvão dos Santos Zaglia',
          email: 'carolinagalvaosantos@gmail.com',
          password: '****************',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          fullName: Yup.string().required('*Este campo não pode ser vazio'),
          email: Yup.string()
            .email('o e-mail está incorreto')
            .required('*Este campo não pode ser vazio'),
          password: Yup.string()
            .min(6, 'Too Short!')
            .required('*Este campo não pode ser vazio'),
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
              <S.SubContainer borderError={touched.fullName && errors.fullName}>
                <label>
                  Full Name
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fullName}
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                  />
                </label>
              </S.SubContainer>
              {touched.fullName && errors.fullName && (
                <span className="formError">{errors.fullName}</span>
              )}
              <S.SubContainer borderError={touched.email && errors.email}>
                <label>
                  Users name or Email
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                </label>
              </S.SubContainer>
              {touched.email && errors.email && (
                <span className="formError">{errors.email}</span>
              )}
              <S.SubContainer borderError={touched.password && errors.password}>
                <label>
                  Create Password
                  <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    borderError={touched.password && errors.password}
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="marginSubmit"
                  />
                </label>
              </S.SubContainer>

              {touched.password && errors.password && (
                <span className="formError" style={{ color: 'red' }}>
                  {errors.password}
                </span>
              )}
              <Button typeBtn="submit" valueText="Sign up" />
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

      <p className="termsAndCondicions">
        By signing up, you agree to <strong>Invision</strong> <br />{' '}
        <span>Terms of Conditions</span> and <span>Privacy Policy</span>
      </p>

      <p className='haveLogin'>
        Already on <strong>Invision? </strong>
        <Link to="/" id="redirectedLink">
          Log in
        </Link>
      </p>
    </S.Container>
  );
};

export default FormSingUp;
