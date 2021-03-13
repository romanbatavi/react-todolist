/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

const Container = ({ children }) => {
  const containerStyles = css`
    display: flex;
  `;
  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

export default Container;
