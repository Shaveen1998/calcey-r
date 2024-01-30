import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    error:null,
    user:null,
    loggedin:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.error = null
            state.loading = true
        },
        loginFailed:(state, action)=>{
            state.error = action.payload
            state.loading = false
            state.loggedin = false
        },
        loginSuccess:(state, action)=>{
            state.user = action.payload
            state.loading = false
            state.error = null
            state.loggedin = true
        },
        logout:(state)=>{
            state.loggedin = false
            state.user = null
        }
    }
})

export const {
    loginFailed,
    loginStart,
    loginSuccess,
    logout
  } = userSlice.actions;
export default userSlice.reducer