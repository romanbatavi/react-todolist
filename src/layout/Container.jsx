/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx, css } from "@emotion/react";
import PropTypes from "prop-types";

const Container = ({ children, flexDirection, flexWrap }) => {
  const containerStyles = css`
    display: flex;
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
  `;
  return (
    <div className="flex-container" css={containerStyles}>
      {children}
    </div>
  );
};

Container.defaultProps = {
  flexDirection: "row",
  flexWrap: "nowrap"
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
  ]),
  flexWrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"])
};

export default Container;
