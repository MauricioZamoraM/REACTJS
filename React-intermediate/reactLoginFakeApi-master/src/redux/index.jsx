import { configureStore } from "@reduxjs/toolkit";
import loginReducer from './slices/loginSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginReducer'] // Le pasamos los reducers que deseamos almacenar, no debemos guardar la informacion que viene del servidor y todo el tiempo se esta actualizando
}

const rootReducer = combineReducers({
  loginSlice: loginReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})


