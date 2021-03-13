/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

const Container = ({ children, flexDirection }) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
  `;
  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flexDirection: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse"
  ])
};

export default Container;
