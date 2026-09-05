import { configureStore } from "@reduxjs/toolkit"

import medicineReducer from "./MedicineSlice"

export const store = configureStore({

    reducer: {

        medicine: medicineReducer,

    },

});