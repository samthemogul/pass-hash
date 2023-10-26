import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
    name: 'info',
    initialState: { 
        display: false,
        content: {
            itemSuccess: false,
            folderSuccess: false,
            deleteSuccess: false,
            copySuccess: false,
            itemUpdateSuccess: false,
            usernameSettingSuccess: false,
            passwordSettingSuccess: false,
            updateAccountSuccess: false
        }
     },
     reducers: {
        show(state, action){
            state.display = !state.display;
            if(action.payload.itemSuccess == true){
                state.content.itemSuccess = !state.content.itemSuccess
            }
            if(action.payload.folderSuccess == true){
                state.content.folderSuccess = !state.content.folderSuccess
            }
            if(action.payload.usernameSettingSuccess == true){
                state.content.usernameSettingSuccess = !state.content.usernameSettingSuccess
            }
            if(action.payload.passwordSettingSuccess == true){
                state.content.passwordSettingSuccess = !state.content.passwordSettingSuccess
            }
            if(action.payload.deleteSuccess == true){
                state.content.deleteSuccess = !state.content.deleteSuccess
            }
            if(action.payload.itemUpdateSuccess == true){
                state.content.itemUpdateSuccess = !state.content.itemUpdateSuccess
            }
            if(action.payload.copySuccess == true){
                state.content.copySuccess = !state.content.copySuccess
            }
            if(action.payload.updateAccountSuccess == true){
                state.content.updateAccountSuccess = !state.content.updateAccountSuccess
            }
        },
        hide(state){
            state.display = !state.display;
            for (const keys in Object.keys(state.content)) {
                state.content[Object.keys(state.content)[keys]]=false;
            }
            
        },
        
    }
})

export const infoActions = infoSlice.actions;

export default infoSlice.reducer;