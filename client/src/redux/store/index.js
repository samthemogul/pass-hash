import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import userSlice from "../slices/userSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        user: userSlice.reducer
    }
})

export default store;