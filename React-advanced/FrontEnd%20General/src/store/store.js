import { configureStore } from '@reduxjs/toolkit';
import { 
    camposSlice,
    pagosSlice,
    tiposDeCamposSlice,
    tipoSolicitudSlice
} from './';


export const store = configureStore({
    reducer: {
        campo: camposSlice.reducer,
        tiposDeCampo: tiposDeCamposSlice.reducer,
        pago: pagosSlice.reducer,
        tipoSolicitud: tipoSolicitudSlice.reducer
    },
    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
