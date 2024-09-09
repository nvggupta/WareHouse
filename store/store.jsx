import { configureStore } from "@reduxjs/toolkit";
import WareHouses from '../HouseWareSlice/HouseWareSlice'
export const store = configureStore({
    reducer:{
        WareHouses,
    }
})