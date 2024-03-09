import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loggedin:false,
    error:null
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginFailed:(state,action)=>{
            state.user=null
            state.loggedin = false
            state.error = action.payload
        },

        login:(state,action)=>{
            state.user=action.payload
            state.loggedin = true
            state.error = null
        },
        logout:(state)=>{
            state.user = null
            state.loggedin = false
            state.error = null
        }
    }
})

export const { login, logout , loginFailed} = userSlice.actions;

export default userSlice.reducer