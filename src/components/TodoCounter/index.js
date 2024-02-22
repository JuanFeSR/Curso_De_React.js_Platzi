import { useTodoContext } from "../../Context";
import "./TodoCounter.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = useTodoContext();

  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      ToDos
    </h1>
  );
}

export { TodoCounter };
