import React from "react";
import { useSelector } from "react-redux";
// Router
import { Route, Switch, Redirect } from "react-router-dom";
// Style
import "./App.scss";
// Components
import Home from "../../containers/Home/Home";
import Login from "../../containers/Login/Login";
import Register from "../../containers/Register/Register";
import CustomRedirect from "../CustomRedirect/CustomRedirect";
// TODO: IMPORT PAGES TO WHICH USER WILL BE REDIRECT

function App() {
  const userSessionInfo = useSelector((state) => state.user);
  const isUserLoggedIn = userSessionInfo.isLoggedIn;

  let windowLocation = window.location;
  let windowURL = windowLocation.pathname;

  return (
    <div className="App">
      <CustomRedirect />
      {isUserLoggedIn &&
      (windowURL === "/login" || windowURL === "/register") ? (
        <Redirect to="/cars" />
      ) : null}
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/cars" component={Home} />
        <Route exact path="/home" component={Home} />
        <Redirect push exact from="/" to="/home" />
      </Switch>
    </div>
  );
}

export default App;
