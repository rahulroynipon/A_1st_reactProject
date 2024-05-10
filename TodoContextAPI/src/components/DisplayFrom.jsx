import { useEffect, useState } from "react";
import { useTodo } from "./../ConText/TodoContext";

export default function DisplayFrom() {
  const { Todos, RemoveTodo, UpdateTodo, DoneStatus } = useTodo();

  return (
    <main className="border w-[400px] py-5 px-10">
      <ul className="list-disc flex flex-col gap-2">
        {Todos.map((item) => (
          <li key={item.id} className="flex justify-between items-center">
            <div
              contentEditable={!item.Done}
              onInput={(e) => UpdateTodo(item.id, e.target.textContent)}
              className={`${
                item.Done ? "line-through" : ""
              } font-semibold px-3 py-2`}
            >
              {item.message}
            </div>
            <div>
              <button
                onClick={() => RemoveTodo(item.id)}
                className="border px-2 py-1 bg-[#307caf]
           text-white hover:bg-[#1d5880] transition-all duration-300"
              >
                Delete
              </button>
              <button
                onClick={() => DoneStatus(item.id, item.Done)}
                className="border px-2 py-1 bg-[#307caf]
           text-white hover:bg-[#1d5880] transition-all duration-300"
              >
                Done
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
