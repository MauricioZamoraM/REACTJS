import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  // Se detiene la propagacion del evento click dentro del modal, para que no se cierre.
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    //Asignacion de clases en forma dinamica
    //Cuando la prop isOpen sea true asignamos la clase is-open
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children} {/* La propiedad children hace referencia al contenido que se encuentra dentro de las etiquetas de apertura y cierre del componente */}
      </div>
    </article>
  );
};

export default Modal;
