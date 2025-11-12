import { useContext } from "react";
import TodoContext from "../contexts/todoContext";
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";


console.log("TODOS JSX LOADED");

export default function Todos() {
  const { todos } = useContext(TodoContext);

  return (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
    <h2 className="text-3xl font-bold mb-6">Your Todos</h2>

    <TodoForm />

    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  </div>
);
}
