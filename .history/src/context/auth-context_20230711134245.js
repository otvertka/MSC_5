import React from "react";

const AuthContex = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export default AuthContex;
