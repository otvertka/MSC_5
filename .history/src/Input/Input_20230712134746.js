import React from "react";

const Input = (props) => {
  return;
  <div
    className={`${classes.control} ${
      emailState.isValid === false ? classes.invalid : ""
    }`}
  >
    <label htmlFor="email">E-Mail</label>
    <input
      type="email"
      id="email"
      value={emailState.value}
      onChange={emailChangeHandler}
      onBlur={validateEmailHandler}
    />
  </div>;
};
