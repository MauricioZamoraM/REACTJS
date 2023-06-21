import { useState } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState(""); // Este estado almacena el contenido del formulario.

  const handleSubmit = (e) => { // Funcion que se ejecuta al enviar el formulario
    if (newTaskName.trim() === "") {
      alert("Please enter a task name");
      return;
    }

    e.preventDefault(); // Evita que se recargue la pagina al enviar un formulario
    createNewTask(newTaskName);
    setNewTaskName(""); // Limpiamos el formulario luego de enviar
  };

  // Se quiere guardar lo que el usuario a tipiado en el localStorage.
  return (
    <form className="my-2 row" onSubmit={handleSubmit}> 
      <div className="col-9">
        <input
          type="text"
          className="form-control"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Enter a new task..."
          autoFocus
        />
      </div>
      <div className="col-3 p-0 d-flex align-items-center">
        <button className="btn btn-primary btn-sm" type="submit">
          Save Task
        </button>
      </div>
    </form>
  );
};
