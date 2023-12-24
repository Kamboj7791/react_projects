import { useContext, useRef, useState } from "react";
import { BiSolidAddToQueue } from "react-icons/bi";
import style from "./AppTodo.module.css";
import { Contextapi } from "../store/contextapi";
function AppTodo() {
  const [itemName, setitemName] = useState("");
  const [itemDate, setitemDate] = useState("");
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const Contextobj = useContext(Contextapi);
  const add = Contextobj.addItem;

  // const text = (event) => {
  //   setitemName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const date = (event) => {
  //   setitemDate(event.target.value);
  //   console.log(` no of updates are :${noOfUpdates.current}`);
  // };
  const click = (event) => {
    event.preventDefault();
    // console.log(event);
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";

    console.log(todoName, todoDate);
    add(todoName, todoDate);
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={click}>
        <div className="col-6">
          <input
            type="text"
            placeholder="enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-btn">
            <BiSolidAddToQueue />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AppTodo;
