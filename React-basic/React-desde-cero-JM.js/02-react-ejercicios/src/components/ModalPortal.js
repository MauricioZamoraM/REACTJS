import ReactDOM from "react-dom";
import "./Modal.css";

const ModalPortal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  // Se utiliza para crear contenido html en otro nodo del dom que sea diferente al root que es donde carga nuestra app de react.
  return ReactDOM.createPortal( // Portales
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    // Asignamos un id a el div del portal.
    document.getElementById("modal") // Hay que indicarle que el portal utiliza otro nodo diferente al root.
  );
};

export default ModalPortal;
