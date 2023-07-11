import React from "react";

const AuthContex = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

const AuthContextProvider = (props) => {
  return <AuthContex.Provider>{props.children}</AuthContex.Provider>;
};

export default AuthContex;
