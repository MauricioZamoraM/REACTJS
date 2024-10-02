import { TaskRow } from "./TaskRow";

export function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  console.log(showCompleted);
  const taskTableRows = (doneValue) => // El done value es la propiedad de la tarea que indica si la tarea fue marcada como completado o no.
    tasks // Arreglo con las tareas
      .filter((task) => task.done === doneValue) // Filtramos el arreglo para que devuelva solo las tareas que no han sido completadas, esto quiere decir que la propiedad doneValue es false.
      .map((task) => ( // y devolvemos las tareas que no han sido completadas, las recorremos con un map para pasarselas al componente TaskRow.
        <TaskRow key={task.name} task={task} toggleTask={toggleTask} />
      ));

  return (
    <table className="table table-striped table-bordered table-dark border-secondary">
      <thead>
        <tr className="table-primary">
          <th>Task</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  );
}
