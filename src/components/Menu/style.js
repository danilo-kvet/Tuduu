import styled from "styled-components";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

export const MenuContainer = styled.div`
  width: 100vw;
  background-color: #cacffe;
  height: 50px;
  color: #1f1300;
  text-align: center;
  line-height: 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 1.5rem;
  border-top: 1px solid #cacffe;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  @media (min-width: 768px) {
    height: 70px;
    padding: 5px 40px 0 40px;
    line-height: 50px;
    font-size: 2rem;
    top: 0;
    left: 0;
    border-bottom: 1px solid #cacffe;
  }
`;

export const CompletedTasksIcon = styled(AssignmentTurnedInIcon)`
  color: #1f1300;
  margin-top: 5px;
`;

export const ToDoTasksIcon = styled(AssignmentIcon)`
  color: #1f1300;
  margin-top: 5px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  cursor: pointer;

  p {
    font-size: 0.8rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    justify-content: space-evenly;
  }
`;
