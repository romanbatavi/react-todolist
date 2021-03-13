/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

const Item = ({ children, flex }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
      `}
    >
      {children}
    </div>
  );
};

Item.PropTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Item;
