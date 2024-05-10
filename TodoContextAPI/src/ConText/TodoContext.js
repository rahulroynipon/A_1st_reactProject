import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
  Todos: [],
  AddTodo: (todo) => {},
  RemoveTodo: (id) => {},
  UpdateTodo: (id, todo) => {},
  DoneStatus: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
