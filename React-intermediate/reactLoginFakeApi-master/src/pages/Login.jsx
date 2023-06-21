import '../css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import { setPassword, setUser } from '../redux/slices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies(); // instanciamos las cookies para poder usarlas correctamente

function Login() {

  const dispatch = useDispatch();
  const { username, password } = useSelector((state) => state.login);
  // const [form, setForm] = useState({});
  // Es este estado vamos a guardar lo que el usuario ingrese en los inputs
  // Metodo que captura lo que el usuario ingresa en los inputs

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleUserChange = (e) => {
    dispatch(setUser(e.target.value));
  };

  const handlePasswordChange = (e) => {
    dispatch(setPassword(e.target.value));
  };

  // Metodo para iniciar sesion y hacer la peticion a la api
  const iniciarSesion = async () => { // Pasamos la url, nuestros parametros dentro de params, el password lo tenemos en md5 que que debemos pasarlo usando la funcion md5
   console.log('usuario',username)
    await axios.get(baseUrl, { params: { username: username, password: md5(password) } })
      .then(response => { // Aqui lo retornamos
        return response.data;
      })
      .then(response => { // Y aqui lo podemos utilizar
        if (response.length > 0) { // Si la respuesta es mayor a cero significa que si encontro un usuario que coincide con ese username y password
          var respuesta = response[0];
          // Guadamos las variables de sesion en las cookies
          cookies.set('id', respuesta.id, { path: "/" });
          cookies.set('apellido_paterno', respuesta.apellido_paterno, { path: "/" });
          cookies.set('apellido_materno', respuesta.apellido_materno, { path: "/" });
          cookies.set('nombre', respuesta.nombre, { path: "/" }); // El path es para que puedan ser accecibles en cualquier ruta de la pagina
          cookies.set('username', respuesta.username, { path: "/" });
          alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
          window.location.href = "./menu"; // Se redirige a la pagina de menu, una vez el inicio de sesion fue correcto, para esto mismo podriamos usarl el Link to tambien.
          // dispatch(setInfologin({ ...form }))
        } else { // Caso contrario el usuario y la contrasena no son correctos
          alert('El usuario o la contraseña no son correctos');
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    if (cookies.get('username')) { // si existe la cookie que lo redirija al menu
      window.location.href = "./menu";
    }
  }, []);

  return (
    <div className="containerPrincipal">
      <div className="containerSecundario">
        <div className="form-group">
          <label>Usuario: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={handleUserChange}
          />
          <br />
          <label>Contraseña: </label>
          <br />
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handlePasswordChange}
          />
          <br />
          <button className="btn btn-primary" onClick={() => iniciarSesion()} >Iniciar Sesión</button>
        </div>
      </div>
    </div>
  );
}

export default Login;