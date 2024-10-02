import { useState, useEffect } from "react";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";
import { TaskTable } from "./components/TaskTable";
import { Container } from "./components/Container";

function App() {
  const [userName, setUserName] = useState("Fazt");
  const [taskItems, setTaskItems] = useState([]); // Este estado almacena las tareas que fueron creadas con un formulario y se estan almacenando en localStorage para que no se pierdan al recargar la pagina.
  const [showCompleted, setshowCompleted] = useState(false); // Estado que va a indicar si una tarea fue completada o no, hay un check que lo determina.
// Para trabajar con localStorage debemos quitar el modo estricto de react ya que sino, no conserva los elementos guardados en el localStorage.
  useEffect(() => {
    // Leemos la data que esta guardada en el localStorage, la primera vez que recargue la pagina mediante el getItem y la clave del valor guardado en localStorage.
    let data = localStorage.getItem("tasks");
    if (data) {
      setTaskItems(JSON.parse(data));
    }
    setUserName("fazt");
  }, []);

  useEffect(() => {
    // En el localStorage debemos guardar la informacion como string, para ello debemos parsear la info con JSON.stringify.
    // Guardamos la tarea cada vez que se actualize el estado de taskItems.
    // localStorage sirve para almecenar datos en el navegador, se puede ver en las herramientas de navegador applications. Existe tambien el sesionStorage y es muy similar pero no se puede compartir entre diferentes pestañas.
    localStorage.setItem("tasks", JSON.stringify(taskItems)); // Lo podemos llamar directamente ya que nuestra aplicacion se encuestra dentro del navegador, el setItem sirve para guardar datos formato clave, valor.
  }, [taskItems]); // En este caso lo que queremos guardar es la informacion que el usuario ingrese en el formulario. Ejecutamos cada vez que cambie el taskItems.
/*
Segun la teoria de js, si queremos guardar un arreglo u objeto en el localStorage, debemos guardar la informacion como string ya que sino nos devuelve object object.
Luego para obtener los datos del localStorage debemos parsear la info con JSON.parse para pasar la informacion a objeto nuevamente.
*/
  const createNewTask = (taskName) => {
    // Validamos que la tarea no exista, ya que si existe no la podemos agregar nuevamente ya que tendriamos una duplicacion de id y daria un error.
    if (!taskItems.find((t) => t.name === taskName)) 
    // Actualizamos el estado de taskItems creando un nuevo arreglo de tareas, lo primero es hacer una copia del estado actual y le agregamos la nueva tarea lo la estructura requerida.
      setTaskItems([...taskItems, { name: taskName, done: false }]); 
  };
// Esta funcion maneja el estado de la tarea, si ya fue completada o no.
  const toggleTask = (task) => // Recibimos la tarea por parametro.
    setTaskItems(
      // Recorremos la lista de tareas con un map.
      // Si la propiedad nombre del arreglo de tareas coincide con la tarea que se recibe por parametro,
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t)) // Primero hacemos una copia de la lista de tareas y la propiedad done le asignamos el valor contrario, esto para indicar si la tarea ya fue completada o no. Sino encuentra la tarea, que conserve el valor unicamente.
    );

  const cleanTasks = () => {
    // Actualizamos el estado para que quitar las tareas que ya fueron hechas del localStorage.
    setTaskItems(taskItems.filter((task) => !task.done)); // Filtramos para obtener todas las tareas que no estan hechas. quitamos las hechas del arreglo.
    setshowCompleted(false);
  };

  return (
    <main className="bg-dark vh-100 text-white">
      <TaskBanner userName={userName} taskItems={taskItems} />
      <Container>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} /> {/* TaskTable es la que tiene la lista de tareas, le pasamos la propiedad toggleTask para que se la pase a taskRow */}
        <VisibilityControl
          description="Completed Tasks"
          isChecked={showCompleted}
          callback={(checked) => setshowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted && ( // Mostramos las tareas que ya han sido completadas.
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
