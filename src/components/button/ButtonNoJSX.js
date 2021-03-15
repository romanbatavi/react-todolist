/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";

import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align }) => {
  const theme = useTheme();
  return jsx(
    "button",
    {
      css: styles.button({
        align,
        color,
        theme
      }),
      onClick: onclick
    },
    text
  );
};

Button.defaultProps = {
  text: "Button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};
export default Button;
