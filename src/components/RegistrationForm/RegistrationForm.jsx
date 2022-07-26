import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerValidation } from "../../utils/validation";
import { signUpStart } from "../../reducers/user/user.actions";

import { selectUserError } from "../../reducers/user/user.selectors";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { Link } from "react-router-dom";

import "./RegistrationForm.scss";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const registrationError = useSelector(selectUserError);

  useEffect(() => {
    setError("");
  }, []);

  async function onHandleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      let validation = registerValidation(
        firstName,
        lastName,
        username,
        password
      );

      if (validation) {
        throw new Error(validation);
      }

      const userData = {
        username,
        password,
        firstName,
        lastName,
      };

      dispatch(signUpStart(userData));

      if (registrationError) {
        setError(registrationError);
      }

      event.target.reset();
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form className="registration-form" onSubmit={onHandleSubmit}>
      <TextField
        className="registration-form-child name-field"
        label="First name"
        placeholder="First name"
        name="firstName"
      />
      <TextField
        className="registration-form-child name-field"
        label="Last name"
        placeholder="Last name"
        name="lastName"
      />
      <TextField
        className="registration-form-child"
        label="Username"
        placeholder="Username"
        name="username"
      />
      <TextField
        className="registration-form-child"
        label="Password"
        placeholder="Password"
        name="password"
        type="password"
      />
      <Button
        variant="contained"
        className="registration-form-child"
        type="submit"
      >
        SIGN UP
      </Button>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <Link to="/login" className="registration-form-child link-child">
        Already have an account? Sign in
      </Link>
      <span className="registration-form-child copyright">
        Copyright &copy; Simple Cars 2022
      </span>
    </form>
  );
}
