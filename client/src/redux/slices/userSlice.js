import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstname : "",
        lastname: "",
        password: "",
        email: "",
        recoveryEmail: "",
        passwordList: []
    },
    reducers: {
        add(state, action){
            const user = action.payload;
            state.firstname = user.firstname;
            state.lastname= user.lastname;
            state.password= user.password;
            state.email= user.email;
            state.recoveryEmail= user.recoveryEmail;
            state.passwordList= user.passwordList
            
        
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice;