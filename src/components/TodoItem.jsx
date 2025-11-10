import TodoContext from "../contexts/todoContext";
import { useContext, useState } from "react";

export default function TodoItem({ todo }) {
  const { deleteTodo, updateTodo, toggleComplete } =
    useContext(TodoContext);

  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (!newText.trim()) return;
    updateTodo(todo.id, newText);
    setEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-700 p-3 rounded">
      {editing ? (
        <input
          className="flex-1 mr-2 px-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={`flex-1 ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => toggleComplete(todo.id)}
          className="text-green-600"
        >
          ✓
        </button>

        {editing ? (
          <button onClick={handleUpdate} className="text-blue-600">
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-yellow-600"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-600"
        >
          X
        </button>
      </div>
    </div>
  );
}
