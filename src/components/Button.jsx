import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, color }) => {
  const classNames = [
    "header-btn",
    color === "black" && "main-black-color",
    color === "red" && "main-red-color"
  ].join(" ");

  return (
    <button className={classNames} onClick={onclick}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"])
};
export default Button;
