import { useState } from "react";
import DisplayFrom from "./components/DisplayFrom";
import FromInput from "./components/FromInput";
import { TodoProvider } from "./ConText/TodoContext";

function App() {
  const [Todos, setTodos] = useState([]);

  const AddTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const RemoveTodo = (id) => {
    setTodos(Todos.filter((item) => item.id != id));
  };

  return (
    <TodoProvider value={{ Todos, AddTodo, RemoveTodo }}>
      <main className="mx-auto w-[400px] mt-[12em] flex flex-col items-center justify-center gap-y-8">
        <FromInput />
        <DisplayFrom />
      </main>
    </TodoProvider>
  );
}

export default App;
