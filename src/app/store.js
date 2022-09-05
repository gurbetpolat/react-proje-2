import { configureStore } from '@reduxjs/toolkit'
import siraCounterSlice from '../slices/siraCounterSlice'
export default configureStore({
    reducer: {
        siraCounter: siraCounterSlice
    },
})