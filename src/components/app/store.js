import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})