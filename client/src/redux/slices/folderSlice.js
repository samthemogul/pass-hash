import { createSlice } from "@reduxjs/toolkit";

const folderSlice = createSlice({
    name: 'folder',
    initialState: { folder: ""},
    reducers: {
        setFolderName(state, action) {
            const activeFolder = action.payload;
            state.folder = activeFolder
        }
    }
})

export const folderActions = folderSlice.actions;

export default folderSlice.reducer;