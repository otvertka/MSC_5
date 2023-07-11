import React, { useState } from "react";

const AuthContex = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  return <AuthContex.Provider>{props.children}</AuthContex.Provider>;
};

export default AuthContex;
