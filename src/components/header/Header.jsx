/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import Button from "../button/Button";
// import styles from "./header.module.css";
import * as styles from "./header.styles";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();

  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Button
          text={showAdd ? "Finish" : "Add"}
          onClick={showAddToggle}
          align="left"
        />
        <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
        {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
        <Button text="Clear" onClick={clearTodos} color="red" align="right" />
      </Container>
      {/* refactor */}
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "Add"}
      </button> */}
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
