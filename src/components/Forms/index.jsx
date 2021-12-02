import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import GoogleLogo from "../../assets/Google__G__Logo.svg";
import Button from "../Button";

import * as S from "./styles";

const Forms = () => {
  return (
    <S.Container>
      <h1>Welcome to Invision</h1>
      <Formik
        initialValues={{
          email: "carolinagalvaosantos@gmail.com",
          password: "****************",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email("Invalid email").required("Required"),
          password: Yup.string().min(6, "Too Short!").required("Required"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              {/* <div> */}
              <label>
                Users name or Email
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  border={touched.email && errors.email && "5px solid red"}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </label>
              {touched.email && errors.email && (
                <p style={{ color: "red" }}>{errors.email}</p>
              )}
              {/* </div> */}
              {/* <div> */}
              <label>
                Password
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  border={
                    touched.password && errors.password && "1px solid red"
                  }
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </label>
              {touched.password && errors.password && (
                <p style={{ color: "red" }}>{errors.password}</p>
              )}
              <a href="#">Forgot password?</a>
              {/* </div>               */}

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
      <p>
        New <strong>Invision?</strong><Link to="/SignUp" id="createLink"> Create Account</Link>{" "}
      </p>
    </S.Container>
  );
};

export default Forms;
