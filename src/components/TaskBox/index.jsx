import {
  TaskBoxContainer,
  IconsContainer,
  DoneTaskIcon,
  IncompleteTask,
} from "./style";
import DeleteModal from "../../components/DeleteModal";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  removeToDoTaskThunk,
  addToDoTaskThunk,
} from "../../store/modules/toDoTasks/thunk";
import {
  addDoneTaskThunk,
  removeDoneTaskThunk,
} from "../../store/modules/doneTasks/thunk";
import { toast } from "react-toastify";

const TaskBox = ({ task }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const addToDone = () => {
    dispatch(removeToDoTaskThunk(task.id));
    dispatch(addDoneTaskThunk(task));
    toast.success("Tarefa movida para campo de tarefas feitas", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeFromFavorite = () => {
    dispatch(addToDoTaskThunk(task));
    dispatch(removeDoneTaskThunk(task.id));
    toast.info("Tarefa movida para campo de tarefas a fazer", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <TaskBoxContainer>
      <div>
        <h5>Nome da atividade: {task.name}</h5>
        <h6>Descrição: {task.description}</h6>
        <h6>Nível de dificuldade: {task.difficulty}</h6>
      </div>
      <IconsContainer>
        {history.location.pathname !== "/donetasks" ? (
          <>
            <DoneTaskIcon onClick={addToDone} />
            <DeleteModal name={task.name} id={task.id} />
          </>
        ) : (
          <IncompleteTask onClick={removeFromFavorite} />
        )}
      </IconsContainer>
    </TaskBoxContainer>
  );
};

export default TaskBox;
