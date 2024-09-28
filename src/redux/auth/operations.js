import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearAuthHeader, instance, setAuthHeaders } from "../../service/instance";



export const registerAuth = createAsyncThunk('auth/register',
     async (userData, thunkApi) => {
        try{
     const data = await instance.post('users/signup', userData)
     setAuthHeaders(data.token);
     return data;
        }catch(error){
     return thunkApi.rejectWithValue(error.message)
        }
})

export const login = createAsyncThunk('auth/login',
        async(userData, thunkApi) => {
                try{
        const data = await instance.post('users/login', userData)
        setAuthHeaders(data.token)
        return data;
                }catch(error){
        return thunkApi.rejectWithValue(error.message)
                }
        }
)

export const logout = createAsyncThunk('auth/logout',
        async(_, thunkApi) => {
                try{
        await instance.post('users/logout')
        clearAuthHeader();
                }catch(error){
        return thunkApi.rejectWithValue(error.message)
                }
        }
)

export const refreshUser = createAsyncThunk('auth/refresh',
        async(_, thunkApi) => {
                try{
        const state = thunkApi.getState();
        const token = state.auth.token;
        setAuthHeaders(token)
                }catch(error){
        return thunkApi.rejectWithValue(error.message)
                }
        },
        {
                condition: (_, thunkApi) => {
                        const state = thunkApi.getState();
                        const token = state.auth.token;

                        if(token) return true;

                        return false;
                }
        }
)