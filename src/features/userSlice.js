import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
    email:"",
    photo:"",
    age:"",
    gender:""
};
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
            state.age = action.payload.age;
            state.gender = action.payload.gender;
          },
          setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
            state.age = null;
            state.gender = null;
          },
    },

});
export const  {setUserLoginDetails ,setSignOutState} = userSlice.actions;

export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPhoto = state => state.user.photo
export const selectUserAge = state => state.user.age
export const selectUserGender = state => state.user.gender
// user is the name of slice
export default userSlice.reducer;
