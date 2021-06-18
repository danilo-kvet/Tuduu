import { AnimatePresence } from "framer-motion";
import { Route, Switch } from "react-router-dom";
import ToDoTasks from "../pages/ToDoTasks";
import DoneTasks from "../pages/DoneTasks";

const Router = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <ToDoTasks />
        </Route>
        <Route>
          <DoneTasks exact path="/donetasks" />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Router;
