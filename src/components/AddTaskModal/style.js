import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const AddTaskButton = styled.button`
  background-color: #fdfcdc;
  border: 1px solid #c9ceff;
  border-radius: 16px;
  height: 40px;
  width: 100%;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const ConfirmButton = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #c9d6ff;
  color: #1f1300;
  font-variant: small-caps;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 8px;
`;

export const StyledTextField = styled(TextField)`
  width: 100%;

  &::placeholder {
    font-size: 0.75rem !important;
  }
`;
