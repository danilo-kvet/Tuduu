import TaskBox from "../../components/TaskBox";
import TasksContainer from "../../components/TasksContainer";
import { HeaderContainer, ToDoPageContainer } from "./style";
import { motion } from "framer-motion";
import AddTaskModal from "../../components/AddTaskModal";
import { useSelector } from "react-redux";

const ToDoTasks = () => {
  const { toDoTasks } = useSelector((store) => store);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ToDoPageContainer>
        <HeaderContainer>
          <p>Tarefas a fazer</p>
          <AddTaskModal />
        </HeaderContainer>
        <TasksContainer>
          {toDoTasks.length > 0 ? (
            toDoTasks.map((task, index) => <TaskBox key={index} task={task} />)
          ) : (
            <p>Adicione novas tarefas</p>
          )}
        </TasksContainer>
      </ToDoPageContainer>
    </motion.div>
  );
};

export default ToDoTasks;
