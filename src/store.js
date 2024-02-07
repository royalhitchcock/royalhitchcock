import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./features/user/userSlice";
import patientSlice from "./features/patients/patientSlice";

const store = configureStore({
    reducer: {
        user: useReducer,
        patient: patientSlice,
    },
});

export default store;