// third-party
import { configureStore } from '@reduxjs/toolkit';

// ==============================|| REDUX TOOLKIT - MAIN STORE ||============================== //
import DEMO from './slices/DemoSlice'
const store = configureStore({
    reducer: {
        DEMO
    }
});


export { store };
