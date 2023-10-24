import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        firstname : "",
        lastname: "",
        password: "",
        email: "",
        recoveryEmail: "",
        passwordList: [],
        passwordSettings : {
            passwordLength: 5,
            includeCapitals: true,
            includeSmall: true,
            includeNumbers: true,
            includeSymbols: true,
        },
        usernameSettings : {
            capitalize: true,
            includeDigits: true
        }
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
            state.passwordSettings= user.passwordSettings
        },
        passwordSet(state, action) {
            const settings = action.payload;
            state.passwordSettings = settings;
        },
        usernameSet(state, action) {
            const settings = action.payload;
            state.usernameSettings = settings;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;