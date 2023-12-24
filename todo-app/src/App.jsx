import AppTodo from "./components/AppTodo";
import Appheading from "./components/Appheading";
import "./App.css";
import TodoItemm from "./components/TodoItemm";
import { useState } from "react";
import Emptylist from "./components/Emptylist";
import { Contextapi } from "./store/contextapi";
function App() {
  const intialTodoItem1 = [];
  const [TodoItem1, setTodoItem1] = useState(intialTodoItem1);

  const addItem = (itemName, itemDate) => {
    setTodoItem1((currentValue) => {
      const newItem = [
        ...currentValue,
        {
          name: itemName,
          date: itemDate,
        },
      ];
      return newItem;
    });
  };
  const deleteItem = (todoDelItem) => {
    console.log(`item deleted :${todoDelItem}`);
    const newitem = TodoItem1.filter((item) => item.name !== todoDelItem);
    setTodoItem1(newitem);
  };

  return (
    <Contextapi.Provider
      value={{
        TodoItem1,
        addItem,
        deleteItem,
      }}>
      <center className="todo-container">
        <Appheading></Appheading>
        <AppTodo />
        <Emptylist></Emptylist>
        <TodoItemm></TodoItemm>
      </center>
    </Contextapi.Provider>
  );
}
export default App;
