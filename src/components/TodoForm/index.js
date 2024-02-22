import "./TodoForm.css";
import { useTodoContext } from "../../Context/index";
import { useState } from "react";

function TodoForm() {
  const { addTodo, setOpenModal } = useTodoContext();

  const [newTodoValue, setNewTodoValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false); // En el caso del createTodoButton se recibia un estado y con una arrow function se devolvia la negacion del estado, lo cual estaba bien para abrir y cerrar el modal, pero en este caso los botones del formulario si o si deberían cerrar el modal, con lo cual se le puede enviar un false.
    addTodo(newTodoValue);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        required
        placeholder="Cortar cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
