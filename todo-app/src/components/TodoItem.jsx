import { MdAutoDelete } from "react-icons/md";
import { useContext } from "react";
import { Contextapi } from "../store/contextapi";
const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(Contextapi);

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6 item">{todoName}</div>
        <div className="col-4 item">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={() => deleteItem(todoName)}>
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoItem;
