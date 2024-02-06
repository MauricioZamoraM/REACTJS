import { createSlice } from '@reduxjs/toolkit';

export const tiposDeCamposSlice = createSlice({
    name: 'tiposDeCampo',
    initialState: {
        tiposDeCampos: [
            // tempEvent
        ],
        getDataForm: [],
    },
    reducers: {
        setTiposDeCampos: (state, { payload } ) => {
            state.tiposDeCampos = payload;
        },
        upSertTiposDeCampos: (state, {payload}) => {
            state.tiposDeCampos = payload;
        },
        setTiposDeCamposDataForm: (state, {payload}) => {
            state.tiposDeCampos = payload.getData;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
    setTiposDeCampos,
    upSertTiposDeCampos,
    setTiposDeCamposDataForm
} = tiposDeCamposSlice.actions;