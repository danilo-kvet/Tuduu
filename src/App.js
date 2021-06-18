import Menu from "./components/Menu";
import Logo from "./components/Logo";
import Router from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Logo />
      <Menu />
      <Router />
    </div>
  );
}

export default App;
