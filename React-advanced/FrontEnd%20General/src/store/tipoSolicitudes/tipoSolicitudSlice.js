import { createSlice } from '@reduxjs/toolkit';

export const tipoSolicitudSlice = createSlice({
    name: 'tipoSolicitud',
    initialState: {
        tiposolicitudes: [
            // tempEvent
        ],
        getDataForm: [],
    },
    reducers: {
        setTipoSolicitudes: (state, { payload } ) => {
            state.tiposolicitudes = payload;
        },
        upSertTipoSolicitud: (state, {payload}) => {
            state.tiposolicitudes = payload.respuesta.solicitudes;
        },
        setTipoSolicitudDataForm: (state, {payload}) => {
            state.getDataForm = payload.getData;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    setTipoSolicitudes,
    upSertTipoSolicitud,
    setTipoSolicitudDataForm
} = tipoSolicitudSlice.actions;