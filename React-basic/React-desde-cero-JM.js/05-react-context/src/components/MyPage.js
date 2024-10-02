import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = null;
const translations = {  // Es este objeto manejamos el contenido de los elementos html de la pagina en 2 idiomas diferentes.
  es: {
    headerTitle: "Mi aplicación SIN Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenid@ invitad@",
    mainHello: "Hola Usuari@",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página",
  },
  en: {
    headerTitle: "My application without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer",
  },
};

const MyPage = () => {
  const [theme, setTheme] = useState(initialTheme); // Este estado se utiliza para determinar el tema oscuro o claro
  const [language, setLanguage] = useState(initialLanguage); // Este estado es para almacenar el estado del idioma.
  const [texts, setTexts] = useState(translations[language]); // Este estado se usa para acceder a las propiedades del objeto translations, es el equivalente a translations.language
  const [auth, setAuth] = useState(initialAuth); // Este estado maneja la sesion

  const handleTheme = (e) => { // Esta es la funcion que maneja el tema y establece si es oscuro o claro
    //console.log(e.target.value);
    if (e.target.value === "light") { // si el valor del radio button es light asignarle la clase light y viceversa.
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const handleLanguage = (e) => { // Maneja el lenguaje seleccionado por el usuario. 
    //console.log(e.target.value);
    if (e.target.value === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const handleAuth = (e) => { // Maneja el inicio de sesion segun el evento click del boton
    if (auth) {
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className="my-page">
      <Header
        theme={theme}
        handleTheme={handleTheme}
        texts={texts}
        handleLanguage={handleLanguage}
        auth={auth}
        handleAuth={handleAuth}
      />
      <Main theme={theme} texts={texts} auth={auth} />
      <Footer theme={theme} texts={texts} />
    </div>
  );
};

export default MyPage;
