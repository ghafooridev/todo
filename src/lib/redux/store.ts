import { configureStore } from '@reduxjs/toolkit';
import todoReducer from "./features/todoSlice";



export const Store = () => {
    return configureStore({
        reducer: {
            todo: todoReducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
    })
}

export type AppStore = ReturnType<typeof Store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']