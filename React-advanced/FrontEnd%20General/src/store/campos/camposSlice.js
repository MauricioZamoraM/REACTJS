import { createSlice } from '@reduxjs/toolkit';

export const camposSlice = createSlice({
    name: 'campo',
    initialState: {
        campos: [
            // tempEvent
        ],
        getDataForm: [],
    },
    reducers: {
        setCampos: (state, { payload } ) => {
            state.campos = payload;
        },
        upSertCampos: (state, {payload}) => {
            state.campos = payload.respuesta.metodos_pago;
        },
        setCamposDataForm: (state, {payload}) => {
            state.campos = payload.getData;
        }
    }
});

// Action creators are generated for each case reducer function
export const {
    setCampos,
    upSertCampos,
    setCamposDataForm
} = camposSlice.actions;