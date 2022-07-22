import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsLogged,
  selectUserError,
} from "../../reducers/user/user.selectors";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";

import { loginValidation } from "../../utils/validation";

import carImg from "../../resources/car-img.png";
import "./LoginForm.scss";

import { signInStart } from "../../reducers/user/user.actions";

export default function LoginForm() {
  const [error, setError] = useState();
  const dispatch = useDispatch();
  let isLoggedIn = useSelector(selectIsLogged);
  let history = useHistory();

  async function onHandleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const validation = loginValidation(username, password);

      if (validation) {
        throw new Error(validation);
      }

      const userData = {
        username,
        password,
      };

      dispatch(signInStart(userData));
      if (isLoggedIn) {
        history.push("/cars");
        event.target.reset();
      }
      //  else {
      //   setError(userError);
      // }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form className="login-form" onSubmit={onHandleSubmit}>
      <TextField
        className="form-child"
        label="Username"
        placeholder="Username"
        name="username"
      />
      <TextField
        className="form-child"
        label="Password"
        placeholder="Password"
        name="password"
        type="password"
      />
      <Button variant="contained" className="login-form-child" type="submit">
        SIGN IN
      </Button>

      {error && <div style={{ color: "red" }}>{error}</div>}

      <Link to="/register" className="login-form-child link-child">
        Don't have an account?
      </Link>
      <Link to="/catalog" className="login-form-child link-child">
        Continue to catalog
      </Link>
      <img src={carImg} className="login-form-child img" alt="car" />
      <span className="login-form-child copyright">
        Copyright &copy; Simple Cars 2022
      </span>
    </form>
  );
}
