import { createSlice, current } from "@reduxjs/toolkit";
import warehouseDetail from '../src/Data.json'

const initialState = {
    data: warehouseDetail,
    CityName: Array.from(new Set(warehouseDetail.map(elem => elem.city))).sort(),
    cluster: Array.from(new Set(warehouseDetail.map(elem => elem.cluster))).sort(),
};

export const houseSlice = createSlice({
    name: "warehouse",
    initialState,
    reducers: {
        
        addData: (state , action)=>{
                console.log(action.payload);
                const newItem = {...action.payload , id:state.data.length+1}
                if(newItem.name  && newItem.code && newItem.city && newItem.cluster){
                    state.data.push(newItem);

                    console.log(current(state));
                }
                else{
                    alert("Add All Field")
                }
        },
      
    }
});

export const { addData } = houseSlice.actions;
export default houseSlice.reducer;
