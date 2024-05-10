import { useCallback, useEffect, useState } from "react";
import DisplayFrom from "./components/DisplayFrom";
import FromInput from "./components/FromInput";
import { TodoProvider } from "./ConText/TodoContext";

function App() {
  const [Todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), Done: false, ...todo }, ...prev]);
  };

  const RemoveTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const DoneStatus = (id, done) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, Done: !done } : item))
    );
  };

  const UpdateTodo = (id, message) => {
    setTodos(
      Todos.map((item) =>
        item?.id == id ? { ...item, message: message } : item
      )
    );
  };

  useEffect(() => {
    const Data = localStorage.getItem("Data");
    if (Data) {
      setTodos(JSON.parse(Data));
    }
  }, []);

  useEffect(() => {
    if (Todos.length > 0) {
      localStorage.setItem("Data", JSON.stringify(Todos));
    }
  }, [Todos]);

  return (
    <TodoProvider
      value={{ Todos, AddTodo, RemoveTodo, DoneStatus, UpdateTodo }}
    >
      <main className="mx-auto w-[400px] mt-[12em] flex flex-col items-center justify-center gap-y-8">
        <FromInput />
        <DisplayFrom />
      </main>
    </TodoProvider>
  );
}

export default App;
