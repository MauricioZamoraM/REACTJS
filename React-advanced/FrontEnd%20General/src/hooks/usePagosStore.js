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

    const limpiaPagos = async() => {   
        //debugger
        dispatch( setPagosDataForm({ getData: '' }) );
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