import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick }) => {
  return <button></button>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
export default Button;
