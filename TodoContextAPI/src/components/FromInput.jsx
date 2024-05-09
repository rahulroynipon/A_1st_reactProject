import { useState } from "react";
import { useTodo } from "./../ConText/TodoContext";

export default function FromInput() {
  const [message, setMessage] = useState("");

  const { AddTodo } = useTodo();

  const onSubmitHandeler = (e) => {
    e.preventDefault();
    if (message == "") return;
    AddTodo({ message });
    setMessage("");
  };

  return (
    <form
      onSubmit={(e) => onSubmitHandeler(e)}
      className="flex items-center justify-center"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border py-2 px-3"
      />
      <button
        type="submit"
        className="border px-3 py-2 font-semibold bg-[#307caf]
         text-white hover:bg-[#1d5880] transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
}
