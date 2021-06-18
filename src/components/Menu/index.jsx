import {
  MenuContainer,
  ToDoTasksIcon,
  CompletedTasksIcon,
  IconContainer,
} from "./style";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <MenuContainer>
      <IconContainer onClick={() => sendTo("/")}>
        <ToDoTasksIcon />
        <p>Tarefas a fazer</p>
      </IconContainer>
      <IconContainer onClick={() => sendTo("/donetasks")}>
        <CompletedTasksIcon />
        <p>Tarefas realizadas</p>
      </IconContainer>
    </MenuContainer>
  );
};

export default Menu;
