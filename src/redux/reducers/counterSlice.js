import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0
}

const countSlice = createSlice({
    name:'count',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count = state.count+2
        },
        decrement:(state,action)=>{
            state.count--
        }
    }
})

export const {increment,decrement} = countSlice.actions;

export default countSlice.reducer