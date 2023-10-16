import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name: 'user',
    initialState: {value:{username:'',email:'',password:''}},
    reducers:{
        login: (state,action) => {
            state.value=action.payload
        },

        logout: (state) => {
            state.value={username:'',email:'',password:''}
        }
    }
});

export const {login,logout}=userSlice.actions;
export default userSlice.reducer;