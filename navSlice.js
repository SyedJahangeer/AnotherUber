import { createSlice } from "@reduxjs/toolkit";


const navSlice=createSlice({
    name:"navSlice",
    initialState:{
        origin:null,
        description:null,
        destination:null,
        users:null,
        DestinationDescription:null,
        travelTimeInformation:[],
        defaultlat:"37.78825",
        defaultlng:"-122.4324",
    },
    reducers:{
        setOrigin:(state,action)=>{
            state.origin=action.payload
        },
        setDescription:(state,action)=>{
            state.description=action.payload;
        },
        setDestination:(state,action)=>{
            state.destination=action.payload;
        },
        setDestinationDescription:(state,action)=>{
            state.DestinationDescription=action.payload;
        },
        
        setTravelTimeInformation:(state,action)=>{
            state.travelTimeInformation=action.payload;
        },
    },
    extraReducers:{

    },

})


export const {setDestinationDescription,setOrigin,setDestination,setTravelTimeInformation,setDescription}=navSlice.actions


export default navSlice.reducer
//Selectors
export const SelectOrigin=(state,action)=>state.navSlice.origin
export const SelectDestination=(state)=>state.navSlice.destination
export const SelectTravelTimeInformation=(state)=>state.navSlice.setTravelTimeInformation 