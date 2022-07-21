import React from "react";
import { Link } from "react-router-dom";
import carImg from "../../resources/car-img.png";

import { useSelector, useDispatch } from "react-redux";

import "./Header.scss";

export default function Header() {
  // const currUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  // function onHandleLogout() {
  //   dispatch(logoutAction());
  // }

  return (
    <nav className="navigation">
      <img src={carImg} alt="mobile-bg-logo" />

      {/* {currUser.user ? (
        <span onClick={onHandleLogout}>LOGOUT</span>
      ) : (
        <Link to="/login">LOGIN</Link>
      )} */}
      <Link to="/login">LOGIN</Link>
    </nav>
  );
}
