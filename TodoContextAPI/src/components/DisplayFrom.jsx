import { useEffect } from "react";
import { useTodo } from "./../ConText/TodoContext";

export default function DisplayFrom() {
  const { Todos, RemoveTodo } = useTodo();

  useEffect(() => {}, [Todos]);

  return (
    <main className="border w-[400px] py-5 px-10">
      <ul className="list-disc flex flex-col gap-2">
        {Todos.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="font-semibold">{item?.message}</span>
            <button
              onClick={() => RemoveTodo(item?.id)}
              className="border px-2 py-1 bg-[#307caf]
           text-white hover:bg-[#1d5880] transition-all duration-300"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
