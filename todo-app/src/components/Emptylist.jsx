import { useContext } from "react";
import { Contextapi } from "../store/contextapi";
const Emptylist = () => {
  const Contextobj = useContext(Contextapi);
  const TodoItem1 = Contextobj.TodoItem1;
  return (
    TodoItem1.length === 0 && (
      <div className="alert alert-success" role="alert">
        DAILY ROUTINE DONE
      </div>
    )
  );
};
export default Emptylist;
