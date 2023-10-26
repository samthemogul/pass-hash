import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
    name: 'popup',
    initialState: { 
        display: false,
        content: {
            newItemPop: false,
            passwordSettingPop: false,
            usernameSettingPop: false,
            AboutUsPop: false,
            AutoFillPop: false,
            ManageFolderPop: false,
            RateUsPop: false,
            TwoStepLoginPop: false,
            NewFolderPop: false,
            deleteItemPop: false,
            updateItemPop: false,
            updateAccountPop: false
        }
     },
    reducers: {
        show(state, action){
            state.display = !state.display;
            if(action.payload.newItemPop == true){
                state.content.newItemPop = !state.content.newItemPop
            }
            if(action.payload.passwordSettingPop == true){
                state.content.passwordSettingPop = !state.content.passwordSettingPop
            }
            if(action.payload.usernameSettingPop == true){
                state.content.usernameSettingPop = !state.content.usernameSettingPop
            }
            if(action.payload.AboutUsPop == true){
                state.content.AboutUsPop = !state.content.AboutUsPop
            }
            if(action.payload.AutoFillPop == true){
                state.content.AutoFillPop = !state.content.AutoFillPop
            }
            if(action.payload.ManageFolderPop == true){
                state.content.ManageFolderPop = !state.content.ManageFolderPop
            }
            if(action.payload.RateUsPop == true){
                state.content.RateUsPop = !state.content.RateUsPop
            }
            if(action.payload.TwoStepLoginPop == true){
                state.content.TwoStepLoginPop = !state.content.TwoStepLoginPop
            }
            if(action.payload.NewFolderPop == true){
                state.content.NewFolderPop = !state.content.NewFolderPop
            }
            if(action.payload.updateItemPop == true){
                state.content.updateItemPop = !state.content.updateItemPop
            }
            if(action.payload.updateAccountPop == true){
                state.content.updateAccountPop = !state.content.updateAccountPop
            }
            if(action.payload.deleteItemPop == true){
                state.content.deleteItemPop = !state.content.deleteItemPop
                // state.content.deleteItemPop.status = action.payload.deleteItemPop.status
            }
        },
        hide(state){
            state.display = !state.display;
            // state.content.newItemPop = false
            // state.content.passwordSettingPop = false
            // state.content.usernameSettingPop = false
            // state.content.AboutUsPop = false
            // state.content.AutoFillPop = false
            // state.content.ManageFolderPop = false
            // state.content.RateUsPop = false
            // state.content.TwoStepLoginPop = false
            // state.content.NewFolderPop = false
            // state.content.deleteItemPop = false
            // state.content.updateItemPop = false
            // state.content.updateAccountPop = false
            for (const keys in Object.keys(state.content)) {
                if(state.content[Object.keys(state.content)[keys]]){
                    state.content[Object.keys(state.content)[keys]]=false;
                }
            }
            
        },
        
    }
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;