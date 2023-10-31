import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import userReducer from "../slices/userSlice";
import popupReducer from "../slices/popupSlice";
import infoReducer from "../slices/infoSlice"
import folderReducer from "../slices/folderSlice"
import searchReducer from "../slices/searchSlice"
import sideBarReducer from "../slices/sideBarSlice"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

const persistConfig = {
    key: 'root',
    storage,
  }
  
const rootReducer = combineReducers({ 
auth: authReducer,
user: userReducer,
popup: popupReducer,
folder: folderReducer,
search: searchReducer,
info: infoReducer,
sidebar: sideBarReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})




export const persistor = persistStore(store)