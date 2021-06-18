import { TrashIcon, DeleteButton } from "./style";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { removeToDoTaskThunk } from "../../store/modules/toDoTasks/thunk";
import { useDispatch } from "react-redux";
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
}));

const DeleteModal = ({ name, id }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id) => {
    dispatch(removeToDoTaskThunk(id));
    toast.error("Tarefa excluída", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
    });
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2>Tem certeza que deseja deletar a tarefa {name}?</h2>
      <DeleteButton onClick={() => handleDelete(id)}>Deletar</DeleteButton>
    </div>
  );

  return (
    <div>
      <TrashIcon onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
};

export default DeleteModal;
