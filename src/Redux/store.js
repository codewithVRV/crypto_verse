import { configureStore } from "@reduxjs/toolkit";

import CurrencySliceReducer from "./CurrencySlice";



export const store = configureStore({
    reducer: {
        currency: CurrencySliceReducer
    },
    devTools: true
});

