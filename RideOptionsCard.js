import { View,Image, FlatList,Text,SafeAreaView, TouchableOpacity,ActivityIndicator } from 'react-native'
import React, { useState,useEffect } from 'react'
import {Icon} from "react-native-elements"
import { useNavigation } from '@react-navigation/native'
import car1R from "../assets/car1R.png"
import tw from 'tailwind-react-native-classnames'
import { useDispatch, useSelector } from 'react-redux';
import { setTravelTimeInformation } from '../navSlice/navSlice'
import { original } from '@reduxjs/toolkit'
export default function RideOptionsCard() {
  const [dataa, setDataa] = useState(null);

  const {origin,destination,description,travelTimeInformation,DestinationDescription}=useSelector(state=>state.nav)
const SURGE_CHARGE_RATE=1.5
const navigation=useNavigation()
const dispatch=useDispatch()
const origin1 = {latitude: origin.geometry.location.lat, longitude:origin.geometry.location.lng};
const destination1 = {latitude:destination.geometry.location.lat, longitude:destination.geometry.location.lng};
const [selected,SetSelected]=useState(null)
const key="AIzaSyAwSAn16kd-Ibt3gya97c_csscJcm8VFUE"
useEffect(()=>{
  const getTravelTime=async()=>{
    
    console.log(destination.desciption)
    fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${description.description}&destinations=${DestinationDescription.description}&key=${key}`)
    .then((res)=>res.json())
    .then((data) => {
      console.log(data)
      dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
      setDataa(true)
    })
    .catch((error) => console.error('Error fetching distance matrix:', error))
    
  }
  
  getTravelTime()
},[origin1,destination1,key,travelTimeInformation])

const data=[
    {
    id:"Uber-X-23",
  title:"UberX",
    multiplier:1,
    image:car1R,
  },
  {
    id:"Uber-X-24",
  title:"UberXL",
    multiplier:1,
    image:car1R,
  },
  {
    id:"Uber-UL-23",
  title:"Uberxxl",
    multiplier:1,
    image:car1R,
  },
  
]
function DataView(){
return(<>
    <SafeAreaView>
        
        <Text style={tw`text-center py-5 text-xl`}>Pick a Ride...{travelTimeInformation.distance.text} </Text>
        </SafeAreaView>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={tw`absolute top-3 left-5 p-3 rounded-full bg-white`}>
        <Icon name="chevron-left" type="fontawesome" color="black" size={20}/>
        </TouchableOpacity>
<SafeAreaView>
  <FlatList data={data} keyExtractor={(item)=>item.id}
  renderItem={({item})=>(
<SafeAreaView>
<TouchableOpacity onPress={()=>SetSelected(item)} style={tw`flex-row items-center justify-between px-5 ${item.id===selected?.id&&"bg-gray-200"}`}>
     <Image style={{width:100,height:100,resizeMode:"contain"}} source={item.image}/>
      <View >
        <Text >{item.title}</Text>
         
         <Text style={tw`text-xl font-semibold`}>{travelTimeInformation.duration.text}Travel Time... </Text>
      </View >
      <Text style={tw`text-xl`}>{
        new Intl.NumberFormat('en',{
          style:"currency",
          currency:"PKR",

        }).format(
          (travelTimeInformation.duration.value*SURGE_CHARGE_RATE*item.multiplier)/100
        )
      }</Text>
    </TouchableOpacity>
   
    </SafeAreaView>
  )}
  />

 <TouchableOpacity 
 disabled={!selected}
 style={tw`bg-black  m-3 ${!selected&&"bg-gray-300"} `}>
    <Text style={tw`text-white text-center text-xl rounded-full `}>Choose {selected?.title}</Text>
  </TouchableOpacity>
 

</SafeAreaView>

</>)
}

    return (
    <>
 {dataa?<DataView/>:<ActivityIndicator size={50} color="red"/>}   


    </>
  )
}