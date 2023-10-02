import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    appName: "unistack"
};

const demo = createSlice({
    name: 'Client Records',
    initialState,
    reducers: {
        updateAppName: (state) => {
            state.appName = "unistack"
        }
    }
});

export const { updateAppName } = demo.actions;
export default demo.reducer;
