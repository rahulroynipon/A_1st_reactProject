import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  Todos: [{ id: 1, message: "this is the todo message" }],
  AddTodo: (todo) => {},
  RemoveTodo: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
