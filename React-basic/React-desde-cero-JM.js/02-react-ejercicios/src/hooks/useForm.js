import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  // Actualizamos el formulario utilizando propiedades dinamicas.
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => { // Este evento se ejecuta cada vez que se desenfocan los campos de entrada.
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    // Si el objeto de errors no tiene errores
    if (Object.keys(errors).length === 0) { // Se valida si el objeto de errores viene vacio.
      alert("Enviando Formulario"); // Si no hay errores mostramos la alerta.
      setLoading(true); //Habilitamos el loader
      helpHttp() // Llamamos el metodo post del helper
        .post("https://formsubmit.co/ajax/mauzamoramoya@gmail.com", {
          body: form,
          headers: { // Cabeceras
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((res) => { // Cuando devuelva la respuesta
          setLoading(false); // Quitamos el loader
          setResponse(true); // Ya tenemos una respuesta
          setForm(initialForm); // Limpiamos los campos del formulario
          setTimeout(() => setResponse(false), 3000); // Despues de 5s establecemos la respuesta como falsa para quitar en mensaje que los datos fueron enviados.
        });
    } else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
