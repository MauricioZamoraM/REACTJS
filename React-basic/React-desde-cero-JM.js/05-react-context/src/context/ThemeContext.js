import { createContext, useState } from "react";

const ThemeContext = createContext(); //Creamos un contexto

const initialTheme = "light";
// Se debe hacer uso de la propiedad children por regla.
const ThemeProvider = ({ children }) => { //Creamos el proveedor que envuelve a todos los componentes de la aplicacion que necesiten el theme.
  const [theme, setTheme] = useState(initialTheme); // Este estado se utiliza para determinar el tema oscuro o claro

  const handleTheme = (e) => {
    //console.log(e.target.value);
    if (e.target.value === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
// Estos son los valores que se le estan pasando al ThemeContext.Provider mediante la data y los componentes hijos podran acceder a estos mediante el hook useContext y la destructuracion.
  const data = { theme, handleTheme }; // La variable data va a recibir la variable de estado y la funcion manejadora.
// Retornamos un componente de tipo ThemeContext.Provider le indicamos que va a envolver a todos los hijos mediante la propiedad children.
// Y le enviamos la data mediante la propiedad value.
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
