import { createContext } from "react";

export const Contextapi = createContext({
  TodoItem1: [],
  addItem: () => {},
  deleteItem: () => {},
});
