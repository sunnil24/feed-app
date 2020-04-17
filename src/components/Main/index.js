import React from "react";
import classnames from "classnames";

//styles
import "./Main.css";

const Main = ({ children, className, ...otherProps }) => {
  return (
    <div className={classnames("main", className)} {...otherProps}>
      {children}
    </div>
  );
};

export default Main;
