import { useState, useContext } from "react";
import TodoContext from "../contexts/todoContext";

export default function TodoForm() {
  const [text, setText] = useState("");
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6"
    >
      <input
        type="text"
        placeholder="Add a new todo..."
        className="flex-1 px-3 py-2 rounded bg-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="px-4 py-2 bg-blue-600 text-black rounded">
        Add
      </button>
    </form>
  );
}
