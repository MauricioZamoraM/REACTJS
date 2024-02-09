import { useDispatch } from 'react-redux';
import services from '../services/servicesTeso';
import { setTiposDeCampos, upSertTiposDeCampos, setTiposDeCamposDataForm } from '../store';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export const useTiposDeCamposStore = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Lista la información que se muestra en TipoSolicitud.js
    const listTiposDeCampos = async () => {
        // const token = localStorage.getItem('token');

        try {
            //debugger
            abrirCargar();
            console.log('Antes de imprimir data')
            // const { data } = await axios.get(services.API.Campos.Api_Core_Mant_Campos_Listar, {token});
            const { data } = await axios.get('http://localhost:3001/data');
            console.log('Imprimiendo data', data)
            if (data.length > 0) {
                for (var i = 0; i < data.length; i++) {
                    console.log('Entro al for')
                    if (data[i].TIP_CAMP_ACTIVO === true) {
                        data[i].TIP_CAMP_ACTIVO = "Activo";
                    } if (data[i].TIP_CAMP_ACTIVO == false) {
                        data[i].TIP_CAMP_ACTIVO = "Inactivo";
                    }
                }

                dispatch(setTiposDeCampos({ campos: data }));
                console.log('despues del dispatch')
                console.log('Imprimiendo data', data)
                cerrarCargar();
            } else {
                if (data.respuesta_tipo === "warning") {
                    NoPermisoMensaje();
                }
                if (data === "") {
                    NoPermisoMensaje();
                }
            }
        } catch (error) {
            console.log('Entro al catch')
            ErrorMensaje();
            console.log("error:" + error);
        }
        console.log('Fin de la funcion desde tipos de campos')
    }

    const limpiaTiposDeCampos = async() => {   
        //debugger
        dispatch( setTiposDeCamposDataForm({ getData: '' }) );
    }

    const getTiposDeCamposUpdate = async(tiposolicitud_id) => {   
        //debugger
        // const token = localStorage.getItem('token');
        // const sistema = localStorage.getItem('sistema_nombre');
        // const tso_id = tiposolicitud_id;
        // checkAuthToken();
            try {
                abrirCargar();
                const { data } = await axios.post(services.API.TipoSolicitud.ApiTesoreria_Mant_Tipo_Solicitud_Obtener, {token, sistema, tso_id});
                if(data.respuesta_tipo === "success"){
                    localStorage.setItem("token", data.token);
                    sessionStorage.setItem("token", data.token);
                    dispatch( setTiposDeCamposDataForm({ getData: data }) );
                    navigate('/pages/tipoSolicitudEditar');
                }
            } catch (error) {
                console.log("error:" + error);
    }
}

    const SuccessMensaje = async () => {
        Swal.fire(
            'Success!',
            'TipoSolicitud Agregado!',
            'success'
        )
    }

    const abrirCargar = async () => {
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

    const NoPermisoMensaje = async () => {
        Swal.fire(
            'No posee permisos para realizar esta acción.',
            'Contacte un administrador.',
            'question'
        )
    }

    const ErrorMensaje = async () => {
        Swal.fire(
            'Ha ocurrido un error.',
            'Contacte un administrador.',
            'error'
        )
    }

    const cerrarCargar = async () => {
        Swal.close();
    }

    return {
        listTiposDeCampos,
        limpiaTiposDeCampos
    }

}