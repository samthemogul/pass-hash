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
        },
        hide(state){
            state.display = !state.display;
            for (const keys in Object.keys(state.content)) {
                state.content[Object.keys(state.content)[keys]]=false;
            }
            
        },
        
    }
});

export const popupActions = popupSlice.actions;

export default popupSlice.reducer;