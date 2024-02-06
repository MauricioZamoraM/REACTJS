import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get('http://localhost:3001/usuarios');
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los usuarios');
  }
});

export const addUser = createAsyncThunk('users/addUser', async (userData) => {
  try {
    const response = await axios.post('http://localhost:3001/usuarios', userData);
    return response.data;
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
});

export const updateUser = createAsyncThunk('users/updateUser', async (user) => {
  try {
    const response = await axios.put(`http://localhost:3001/usuarios/${user.id}`, user);
    return response.data;
  } catch (error) {
    throw Error('Error al actualizar el usuario');
  }
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (userId) => {
  try {
    await axios.delete(`http://localhost:3001/usuarios/${userId}`);
    return userId;
  } catch (error) {
    throw new Error('Error al eliminar el usuario');
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    filteredUsers: [],
    pageSize: 10,
    status: 'idle',
    error: null,
  },
  reducers: {
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
    setFilteredUsers: (state, action) => {
      state.filteredUsers = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const index = state.users.findIndex((user) => user.id === updatedUser.id);
        if (index !== -1) {
          state.users[index] = updatedUser;
        }
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter((user) => user.id !== action.payload);
      });
  },
});

export const { setPageSize, setFilteredUsers } = usersSlice.actions;

export const selectUsers = (state) => state.users.data;
export const selectFilteredUsers = (state) => state.users.filteredUsers;
export const selectPageSize = (state) => state.users.pageSize;
export const selectStatus = (state) => state.users.status;
export const selectError = (state) => state.users.error;
