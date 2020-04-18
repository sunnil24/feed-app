import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

//styles
import "./Main.css";

const Main = ({ children, className, ...otherProps }) => {
  return (
    <div className={classnames("main", className)} {...otherProps}>
      {children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Main;
