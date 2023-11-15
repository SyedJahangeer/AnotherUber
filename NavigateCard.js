import { View, Text,SafeAreaView,TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useDispatch } from 'react-redux'
import { setDestination,setOrigin,setDescription } from '../navSlice/navSlice'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import NavFavorite from './NavFavorite'

export default function NavigateCard() {
const navigation=useNavigation()
const dispatch=useDispatch()
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>

      <Text style={tw`text-center py-5 text-xl text-black font-bold`}>Hello Good Morning</Text>
      <View style={tw`border-t border-gray-400 flex-shrink`}>
        <View>
        <GooglePlacesAutocomplete
        query={{
            key:'AIzaSyAwSAn16kd-Ibt3gya97c_csscJcm8VFUE',
            language:'en'
        }} 
        placeholder='Where to?'
        nearbyPlacesAPI='GooglePlacesSearch'    
        debounce={400}
        minLength={2}
        onPress={(data,details)=>{
            dispatch(setDestination(details))
             
            dispatch(setDescription(data))
        {console.log(data.description)}
        {console.log(details)}
          navigation.navigate("Rideoptions")
        }}
        fetchDetails={true}
        styles={{container:{flex:0},textInput:{fontSize:18}}}
        
        />
        
        </View>
      </View>
      <NavFavorite/>
      <SafeAreaView style={tw`flex flex-row justify-between`}>
    <TouchableOpacity onPress={()=>navigation.navigate("RideOptionsCard")} style={tw` flex mt-10 ml-5 flex-row bg-black w-24 px-4 py-3 rounded-full bg-black`}>
   
    <Icon 
           
           name='car'
           type='ionicon'
           color='white'
           size={19}
           />
      <Text style={tw`text-white `}> Rides</Text>
    
      </TouchableOpacity>
      <TouchableOpacity style={tw` flex mt-10 mr-5 flex-row bg-white w-24 px-4 py-3 rounded-full bg-black`}>
   
    <Icon 
           
           name='fast-food-outline'
           type='ionicon'
           color='white'
           size={19}
           />
      <Text style={tw`text-white `}> Eats</Text>
    
      </TouchableOpacity>
      </SafeAreaView>         
    </SafeAreaView>
  )
}