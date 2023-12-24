import { useContext } from "react";
import { Contextapi } from "../store/contextapi";
import TodoItem from "./TodoItem";

const TodoItemm = () => {
  const { TodoItem1 } = useContext(Contextapi);

  return (
    <>
      {TodoItem1.map((item, index) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.date}
          key={index}></TodoItem>
      ))}
    </>
  );
};
export default TodoItemm;
