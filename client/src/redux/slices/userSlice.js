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
        folders: [],
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
        },
        deleteId : -1,
        updateId: -1,
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
            state.usernameSettings= user.usernameSettings
            state.folders= user.folders
        },
        passwordSet(state, action) {
            const settings = action.payload;
            state.passwordSettings = settings;
        },
        usernameSet(state, action) {
            const settings = action.payload;
            state.usernameSettings = settings;
        },
        addItem(state, action) {
            const item = action.payload;
            state.passwordList.push(item);
        },
        createFolder(state, action) {
            const folderName = action.payload;
            state.folders.push(folderName)
        },
        selectDeleteId(state, action){
            const id = action.payload
            state.deleteId = id
        },
        deleteItem(state, action){
            const id = state.deleteId
            let indexToDelete = state.passwordList.indexOf(state.passwordList.find((item) => item.id == id ));
            if (indexToDelete !== -1) {
                state.passwordList.splice(indexToDelete, 1);
                }
            
        },
        selectUpdateId(state, action){
            const id = action.payload
            state.updateId = id
        },
        updateItem(state, action){
            const id = state.updateId
            let indexToUpdate = state.passwordList.indexOf(state.passwordList.find((item) => item.id == id ));
            const updatedItem = action.payload;
            state.passwordList[indexToUpdate] = updatedItem
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;