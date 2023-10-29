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
        folders: ["No folder"],
        passwordSettings : {
            passwordLength: 12,
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
        updateUserInfo: {}
    },
    reducers: {
        register(state, action){
            const user = action.payload
            state.firstname = user.firstname;
            state.lastname= user.lastname;
            state.password= user.password;
            state.email= user.email;
            state.passwordList= user.passwordList
            state.passwordSettings= user.passwordSettings
            state.usernameSettings= user.usernameSettings
        },
        login(state, action){
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
        logout(state){
            state.firstname = "";
            state.lastname= "";
            state.password= "";
            state.email= "";
            state.recoveryEmail= "";
            state.passwordList= [];
            state.passwordSettings= {};
            state.usernameSettings= {};
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
            console.log(state.deleteId)
        },
        deleteItem(state, action) {
            const updatedPasswordList = action.payload;
            state.passwordList = updatedPasswordList
            // const indexToDelete = state.passwordList.findIndex(item => item._id == id);
            // console.log(id, indexToDelete)
          
            // if (indexToDelete !== -1) {
            //   // Use slice to create a new array without the item to delete
            //   const updatedList = [
            //     ...state.passwordList.slice(0, indexToDelete),
            //     ...state.passwordList.slice(indexToDelete + 1)
            //   ];
          
            //   // Update the state with the new array
            //   state.passwordList = updatedList;
            // }
          },
        selectUpdateId(state, action){
            const id = action.payload
            state.updateId = id
        },
        unsetId(state, action){
            state.updateId = -1
            state.deleteId = -1
        },
        updateItem(state, action){
            const id = state.updateId
            let indexToUpdate = state.passwordList.indexOf(state.passwordList.find((item) => item.id == id ));
            const updatedItem = action.payload;
            state.passwordList[indexToUpdate] = updatedItem
        },
        updateUser(state, action){
            const newUserData = action.payload
            const keyList = Object.keys(state)
            for (const item in keyList) {
                state[keyList[item]] = newUserData[keyList[item]]
            }
        },
        updateUserInfo(state, action){
            const info = action.payload;
            state.updateUserInfo = info;
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;