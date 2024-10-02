import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm); // Variable de estado para manejar la informacion del formulario.

  const handleChange = (e) => { // Funcion para capturar la informacion de los inputs del formulario cuando sufran cambios.
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => { // Funcion para controlar el envio del formulario
    e.preventDefault(); // Quitamos el comportamiento por defecto que lo que hace es recargar la pagina cuando se envia el formulario

    if (!form.artist || !form.song) { // Si estos valores estan vacios, envia la alerta.
      alert("Datos Incompletos");
      return;
    }

    handleSearch(form); // Ejecutamos la funcion que se recibe como prop y le pasamos lo que tenga el formulario
    setForm(initialForm); // Despues de enviar, limpiamos el formulario.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Intérprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          onChange={handleChange}
          value={form.song}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default SongForm;
