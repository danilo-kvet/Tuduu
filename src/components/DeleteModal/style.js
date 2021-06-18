import styled from "styled-components";
import DeleteIcon from "@material-ui/icons/Delete";

export const TrashIcon = styled(DeleteIcon)`
  color: #c78283;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 10px;
  border-radius: 8px;
  border: none;
  background-color: #c78283;
  color: #fff;
  font-variant: small-caps;
  text-transform: uppercase;
  cursor: pointer;
`;
