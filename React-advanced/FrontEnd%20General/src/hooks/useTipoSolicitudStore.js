import { useDispatch } from 'react-redux';
import services from '../services/servicesTeso';
import {  onLogin, onLogout, setTipoSolicitudes, upSertTipoSolicitud, setTipoSolicitudDataForm } from '../store';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export const useTipoSolicitudStore = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Lista la información que se muestra en TipoSolicitud.js
    const listTipoSolicitudes = async() => {
        //debugger
        // const token = localStorage.getItem('token');
        // checkAuthToken();
            try {
                // debugger
                //abrirCargar();
                const { data } = await axios.get("https://localhost:7223/api/listarTipoSolicitud");
                if(data.respuesta_tipo === "success"){
                    for (var i = 0; i < data.listTipoSolicitud.length; i++){
                        if(data.listTipoSolicitud[i].tso_estado === true){
                            data.listTipoSolicitud[i].tso_estado = "Activo";
                        } if (data.listTipoSolicitud[i].tso_estado == false) {
                            data.listTipoSolicitud[i].tso_estado = "Inactivo";
                        } 
                      }
                    //   localStorage.setItem("token", data.token);
                    //   sessionStorage.setItem("token", data.token);
                    dispatch( setTipoSolicitudes({ solicitudes: data.listTipoSolicitud }) );
                    //cerrarCargar();
                }else {
                    if(data.respuesta_tipo === "warning"){
                        NoPermisoMensaje();
                    }
                    if(data === ""){
                        NoPermisoMensaje();
                    }
                }
            } catch (error) {
                ErrorMensaje();
                console.log("error:" + error);
            }
    }

    //Actualiza e inserta tiposolicitudes. 
    const TipoSolicitudUpsert = async({tso_id,  tso_nombre, tso_estado}) => {
        debugger
        const token = localStorage.getItem('token');
        if(tso_estado == "1" || tso_estado == 1){
            tso_estado = true;
        }else{
            tso_estado = false;
        }
        // checkAuthToken();
            try {
                const { data } = await axios.post(services.API.TipoSolicitud.ApiTesoreria_Mant_Tipo_Solicitud_Actualizar, {token, tso_id,  tso_nombre, tso_estado});
                if(data.respuesta_tipo === "success"){
                    console.log("data: "+ data);
                    SuccessMensaje();
                    // localStorage.setItem("token", data.token);
                    // sessionStorage.setItem("token", data.token);
                    dispatch( upSertTipoSolicitud({ respuesta: data }) );
                    navigate('/pages/tipoSolicitud');
                }
                if(data.respuesta_tipo === "warning"){
                    Swal.fire(
                        'TipoSolicitud Duplicado',
                        'Por favor seleccione otra tiposolicitud.',
                      )
                }
            } catch (error) {
                console.log("error:" + error);
                ErrorMensaje();
            }
    }

    //Obtiene la tiposolicitud a actualizar para cargar el form de editar.
    const getTipoSolicitudUpdate = async(tiposolicitud_id) => {   
        //debugger
        const token = localStorage.getItem('token');
        const sistema = localStorage.getItem('sistema_nombre');
        const tso_id = tiposolicitud_id;
        // checkAuthToken();
            try {
                abrirCargar();
                const { data } = await axios.post(`https://localhost:7223/api/obtenerTipoSolicitud/${tiposolicitud_id}`);
                if(data.respuesta_tipo === "success"){
                    // localStorage.setItem("token", data.token);
                    // sessionStorage.setItem("token", data.token);
                    dispatch( setTipoSolicitudDataForm({ getData: data.listTipoSolicitud }) );
                    navigate('/pages/tipoSolicitudEditar');
                }
            } catch (error) {
                console.log("error:" + error);
    }
}

        const limpiaTipoSolicitud = async() => {   
            //debugger
            dispatch( setTipoSolicitudDataForm({ getData: '' }) );
        }


    // const checkAuthToken = async() => {
        
    //     const token2 = sessionStorage.getItem('token');
    //     const token = localStorage.getItem('token');
    //     if ( !token && !token2 ) return dispatch( onLogout() );

    //     try {   //Se recuperan los datos sesionStorage porque se pierden al recargar, de esta manera validamos que el token siga vigente y no cierre sesión al refrescar.
    //         const nombre = sessionStorage.getItem('Name');
    //         const tiposolicitud = sessionStorage.getItem('payload');
    //         localStorage.setItem('Name', nombre);
    //         localStorage.setItem('payload', tiposolicitud);
    //         localStorage.setItem('token', token2 );
    //         localStorage.setItem('token-init-date', new Date().getTime() );
    //         dispatch( onLogin({ name: nombre, uid: tiposolicitud }) );
    //     } catch (error) {
    //         localStorage.clear();
    //         dispatch( onLogout() );
    //     }
    // }

    //Mensajes Swal
      const SuccessMensaje = async() => {   
          Swal.fire(
        'Success!',
        'TipoSolicitud Agregado!',
        'success'
      )
    }

    const abrirCargar = async() => {   
        Swal.fire({
            title: 'Cargando!',
            html: 'Un momento por favor.',
            timer: 1500,
            timerProgressBar: false,
            didOpen: () => {
              Swal.showLoading() 
            },
          })
    }

    const NoPermisoMensaje = async() => {   
        Swal.fire(
            'No posee permisos para realizar esta acción.',
            'Contacte un administrador.',
            'question'
          )
    }

    const ErrorMensaje = async() => {   
        Swal.fire(
            'Ha ocurrido un error.',
            'Contacte un administrador.',
            'error'
          )
    }

    return {
        //* Métodos
        listTipoSolicitudes,
        TipoSolicitudUpsert,
        getTipoSolicitudUpdate,
        limpiaTipoSolicitud
    }

}