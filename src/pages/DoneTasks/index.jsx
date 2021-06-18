import { DoneTasksPageContainer } from "./style";
import TasksContainer from "../../components/TasksContainer";
import TaskBox from "../../components/TaskBox";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const DoneTasks = () => {
  const { doneTasks } = useSelector((store) => store);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <DoneTasksPageContainer>
        <p>Tarefas realizadas</p>

        <TasksContainer>
          {doneTasks.length > 0 ? (
            doneTasks.map((task, index) => <TaskBox key={index} task={task} />)
          ) : (
            <p>Nenhuma tarefa concluída</p>
          )}
        </TasksContainer>
      </DoneTasksPageContainer>
    </motion.div>
  );
};

export default DoneTasks;
