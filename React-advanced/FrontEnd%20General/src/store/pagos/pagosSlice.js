import { createSlice } from '@reduxjs/toolkit';

export const pagosSlice = createSlice({
    name: 'pago',
    initialState: {
        pagos: [
            // tempEvent
        ],
        getDataForm: [],
    },
    reducers: {
        setPagos: (state, { payload } ) => {
            state.pagos = payload;
        },
        upSertPagos: (state, {payload}) => {
            state.pagos = payload;
        },
        setPagosDataForm: (state, {payload}) => {
            state.pagos = payload.getData;
        }
    }
});


// Action creators are generated for each case reducer function
export const {
  setPagos,
  upSertPagos,
  setPagosDataForm
} = pagosSlice.actions;