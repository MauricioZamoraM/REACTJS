import { useDispatch } from 'react-redux';
import services from '../services/servicesTeso';
import {  onLogin, onLogout, setCampos, upSertCampos, setCamposDataForm } from '../store';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export const useCamposStore = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Lista la información que se muestra en TipoSolicitud.js
    const listCampos = async() => {
        //debugger
        const token = localStorage.getItem('token');
        // checkAuthToken();
            try {
                //debugger
                //abrirCargar();
                console.log('Antes de imprimir data')
                // const { data } = await axios.get(services.API.Campos.Api_Core_Mant_Campos_Listar, {token});
                const { data } = await axios.get('http://localhost:3001/data');
                console.log('Imprimiendo data',data)
                // if(data.success === "true"){
                    for (var i = 0; i < data.length; i++){
                        console.log('Entro al for')
                        if(data[i].CAMP_ACTIVO === true){
                            data[i].CAMP_ACTIVO = "Activo";
                        } if (data[i].CAMP_ACTIVO == false) {
                            data[i].CAMP_ACTIVO = "Inactivo";
                        } 
                      }
                    //   localStorage.setItem("token", data.token); // En la api no viene el token hay que indicarlo para que lo corrijan
                    //   sessionStorage.setItem("token", data.token);
                    dispatch( setCampos({ campos: data }) ); 
                    console.log('despues del dispatch')
                    console.log('Imprimiendo data',data)
                    //cerrarCargar();
                // }else {
                //     if(data.respuesta_tipo === "warning"){
                //         NoPermisoMensaje();
                //     }
                //     if(data === ""){
                //         NoPermisoMensaje();
                //     }
                // }
            } catch (error) {
                console.log('Entro al catch')
                ErrorMensaje();
                console.log("error:" + error);
            }
            console.log('Fin de la funcion')
    }

    //Actualiza e inserta campos. 
    const CamposUpsert = async({CAMP_ID, CAMP_NOMBRE, CAMP_REQUERIDO, CAMP_DESCRIPCION, CAMP_VALIDACION, TIP_CAMP_ID, CAMP_ACTIVO, detalles}) => {
        const token = localStorage.getItem('token');
        if(CAMP_ACTIVO == "true" || CAMP_ACTIVO == true){
            CAMP_ACTIVO = true;
        }else{
            CAMP_ACTIVO = false;
        }
        // checkAuthToken();
            try {
                // const { data } = await axios.post(services.API.Campos.Api_Core_Mant_Campos_Actualizar, {token, CAMP_ID, CAMP_NOMBRE, CAMP_REQUERIDO, CAMP_DESCRIPCION, CAMP_VALIDACION, TIP_CAMP_ID, CAMP_ACTIVO, detalles});
                const { data } = await axios.post('http://localhost:3001/data',{ CAMP_ID, CAMP_NOMBRE, CAMP_REQUERIDO, CAMP_DESCRIPCION, CAMP_VALIDACION, TIP_CAMP_ID, CAMP_ACTIVO, detalles});
                // if(data.respuesta_tipo === "success"){
                    console.log("data: "+ data);
                    SuccessMensaje();
                    // localStorage.setItem("token", data.token);
                    // sessionStorage.setItem("token", data.token);
                    dispatch( upSertCampos({ campos: data }) );
                    navigate('/pages/tipoSolicitud');
                // }
                // if(data.respuesta_tipo === "warning"){
                //     Swal.fire(
                //         'TipoSolicitud Duplicado',
                //         'Por favor seleccione otra tiposolicitud.',
                //       )
                // }
            } catch (error) {
                console.log("error:" + error);
                ErrorMensaje();
            }
    }

    //Obtiene la tiposolicitud a actualizar para cargar el form de editar.
    const getCamposUpdate = async(campo_id) => {   
        //debugger
        const token = localStorage.getItem('token');
        const sistema = localStorage.getItem('sistema_nombre');
        const tso_id = campo_id;
        // checkAuthToken();
            try {
                abrirCargar();
                // const { data } = await axios.post(services.API.Campos.Api_Core_Mant_Campos_Obtener, {token, CAMP_ID});
                const { data } = await axios.post(`http://localhost:3001/data${campo_id}`,);
                // if(data.respuesta_tipo === "success"){
                    // localStorage.setItem("token", data.token);
                    // sessionStorage.setItem("token", data.token);
                    dispatch( setCamposDataForm({ getData: data }) );
                    navigate('/pages/tipoSolicitudEditar'); // CONFIGURAR PAGINA
                // }
            } catch (error) {
                console.log("error:" + error);
    }
}

        const limpiaCampos = async() => {   
            //debugger
            dispatch(setCamposDataForm({ getData: '' }) );
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
        listCampos,
        CamposUpsert,
        getCamposUpdate,
        limpiaCampos
    }

}