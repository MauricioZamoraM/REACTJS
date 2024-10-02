// SE DEBE CREAR U ARCHIVO IGUAL A ESTE POR CADA REDUCER REQUERIDO
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    username: '',
    password: ''
  },
  //Propiedad para actualizar el contador
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload.password;
    }
  }
})

export const { setUser, setPassword } = loginSlice.actions;
export default loginSlice.reducer; // Se exporta el reducer de loginSlice
