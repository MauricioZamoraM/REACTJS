import { configureStore } from '@reduxjs/toolkit';
import { 
    camposSlice,
    pagosSlice,
    tiposDeCamposSlice
} from './';


export const store = configureStore({
    reducer: {
        campo: camposSlice.reducer,
        tiposDeCampo: tiposDeCamposSlice.reducer,
        pago: pagosSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
