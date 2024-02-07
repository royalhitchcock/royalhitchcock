import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    patientArray: [],
    patientInfo: null,
};

const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {
        createPatientArray(state, action) {
            state.patientArray = action.payload;
        },
        setPatientInfo(state, action) {
            state.patientInfo = state.patientArray[action.payload];
        },
    }
});

export const { createPatientArray, setPatientInfo } = patientSlice.actions;

export default patientSlice.reducer;