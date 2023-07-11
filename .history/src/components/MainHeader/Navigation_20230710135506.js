import React from "react";

import classes from "./Navigation.module.css";
import AuthContex from "../../context/auth-context";

const Navigation = (props) => {
  return (
    <AuthContex.Consumer>
      {(ctx) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {props.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {props.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {props.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContex.Consumer>
  );
};

export default Navigation;