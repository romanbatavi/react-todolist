/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { useTheme } from "@emotion/react";
import { jsx } from "@emotion/react";
import PropTypes from "prop-types";
// import styles from "./todoform.module.css";
import * as styles from "./todoform.styles";
import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../button/Button";

const TodoForm = ({ addTodo, showAdd }) => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("No Blank Todo Bruh!!");
      return;
    }

    if (value.length > 30) {
      alert("Please Create A Shorter Todo Text!");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="todoform-component">
        <form onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              {/* <button css={styles.addBtn({ theme })}>Add</button> */}
              <Button text="Add" />
            </Item>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};

export default TodoForm;
