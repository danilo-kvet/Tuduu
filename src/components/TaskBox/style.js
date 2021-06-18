import styled from "styled-components";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

export const TaskBoxContainer = styled.div`
  width: 95%;
  height: 100px;
  background-color: #fdfcdc;
  border: 1px solid #c9ceff;
  border-radius: 16px;
  padding: 8px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    width: 42%;
    max-width: 640px;
    margin-right: 16px;
  }

  @media (min-width: 1150px) {
    width: 46%;
    max-width: 640px;
    margin-right: 16px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const DoneTaskIcon = styled(DoneIcon)`
  color: green;
  cursor: pointer;
`;

export const IncompleteTask = styled(CloseIcon)`
  color: red;
  cursor: pointer;
`;
