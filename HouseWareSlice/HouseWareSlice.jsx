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
        updateData: (state , action)=>{
            console.log(current(state.data));
            console.log(action.payload.updateData)
            let index = state.data.findIndex(elem=>elem.id==action.payload.updateData.id);
            state.data[index] =  action.payload.updateData;
            // const updatedState = state.data.filter(elem=>elem.id != action.payload.updateData.id);
            // console.log(updateData);
            // updatedState.push(action.payload.updateData);
            // state.data = [...updatedState];
        }
      
    }
});

export const { addData,updateData } = houseSlice.actions;
export default houseSlice.reducer;
