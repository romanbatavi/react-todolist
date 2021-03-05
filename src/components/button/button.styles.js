import { css } from "@emotion/core";

export const button = ({ align }) => css`
  font-size: 1.8rem;
  font-family: "Bungee", sans-serif;
  width: 24%;
  padding: 16px;
  cursor: pointer;
  background: unset;
  border: unset;
  outline: unset;
  text-align: ${align};
`;
