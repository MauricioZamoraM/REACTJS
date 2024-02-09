import { useDispatch } from 'react-redux';
import services from '../services/servicesTeso';
import { setPagos, upSertPagos, setPagosDataForm } from '../store';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


export const usePagosStore = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Lista la información que se muestra en TipoSolicitud.js
    const listPagos = async () => {
        // const token = localStorage.getItem('token');
        try {
            abrirCargar();
            const { data } = await axios.get('https://localhost:7223/api/listarPagos');
            if (data.listPagos.length > 0) {
                for (var i = 0; i < data.listPagos.length; i++) {
                    console.log('Entro al for')
                    if (data.listPagos[i].estado === 1) {
                        data.listPagos[i].estado = "Activo";
                    } if (data.listPagos[i].estado === 0) {
                        data.listPagos[i].estado = "Inactivo";
                    }
                }
                dispatch(setPagos({ listaPagos: data.listPagos }));
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
    }

    //Actualiza e inserta pagos. 
    const PagosUpsert = async ({ id }) => {
        // debugger
        // const token = localStorage.getItem('token');
        // if (tso_estado == "true" || tso_estado == true) {
        //     tso_estado = true;
        // } else {
        //     tso_estado = false;
        // }
        // checkAuthToken();
        try {
            const { data } = await axios.post('', { id });
            if (data.respuesta_tipo === "success") {
                console.log("data: " + data);
                SuccessMensaje();
                // localStorage.setItem("token", data.token);
                // sessionStorage.setItem("token", data.token);
                dispatch(upSertPagos({ respuesta: data }));
                navigate('/pages/tipoSolicitud');
            }
            if (data.respuesta_tipo === "warning") {
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

    //Obtiene el pago a actualizar para cargar el form de editar.
    const getPagosUpdate = async (id_pago) => {
        //debugger
        // const token = localStorage.getItem('token');
        // const sistema = localStorage.getItem('sistema_nombre');
        const id = id_pago;
        // checkAuthToken();
        try {
            abrirCargar();
            const { data } = await axios.post(services.API.TipoSolicitud.ApiTesoreria_Mant_Tipo_Solicitud_Obtener, {id});
            if (data.respuesta_tipo === "success") {
                // localStorage.setItem("token", data.token);
                // sessionStorage.setItem("token", data.token);
                dispatch(setPagosDataForm({ getData: data }));
                navigate('/pages/PagosEditar');
            }
        } catch (error) {
            console.log("error:" + error);
        }
    }


    const limpiaPagos = async () => {
        //debugger
        dispatch(setPagosDataForm({ getData: '' }));
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
        listPagos,
        limpiaPagos
    }

}