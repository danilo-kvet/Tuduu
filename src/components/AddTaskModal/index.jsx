import { AddTaskButton, ConfirmButton, StyledTextField } from "./style";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addToDoTaskThunk } from "../../store/modules/toDoTasks/thunk";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    maxWidth: 400,
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  addContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AddTaskModal = () => {
  const { register, handleSubmit, reset } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const { toDoTasks } = useSelector((store) => store);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addId = () => {
    if (toDoTasks.length === 0) return 1;
    return toDoTasks[toDoTasks.length - 1].id + 1;
  };

  const handleForm = (data) => {
    setOpen(false);
    const id = addId();
    const newData = { ...data, id: id };
    reset();
    toast.success("Tarefa criada com sucesso", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(addToDoTaskThunk(newData));
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form onSubmit={handleSubmit(handleForm)}>
        <StyledTextField
          label="Nome da atividade"
          variant="outlined"
          {...register("name")}
          margin="normal"
          required
        />
        <StyledTextField
          label="Descrição"
          variant="outlined"
          {...register("description")}
          multiline
          rows={4}
          margin="normal"
          required
        />
        <StyledTextField
          label="Dificuldade"
          variant="outlined"
          margin="normal"
          required
          {...register("difficulty")}
        />
        <ConfirmButton type="submit">Confirmar</ConfirmButton>
      </form>
    </div>
  );

  return (
    <div>
      <AddTaskButton onClick={handleOpen}>
        <div className={classes.addContainer}>
          <AddIcon />
          Adicionar nova tarefa
        </div>
      </AddTaskButton>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default AddTaskModal;
