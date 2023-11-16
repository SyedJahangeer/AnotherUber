import { View,TouchableOpacity, Text ,SafeAreaView,StyleSheet,Image} from 'react-native'
import React from 'react'
import uberlogo from "../assets/uber.png"
import tw from 'tailwind-react-native-classnames'
import NavOptions from './NavOptions'
import {GOOGLE_MAPS_APIKEY} from '@env'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { useDispatch } from 'react-redux'
import { setDestinationDescription,setDestination,setOrigin,setDescription } from '../navSlice/navSlice'
import NavFavorite from './NavFavorite'
import { useNavigation } from '@react-navigation/native'
export default function HomeScreen() {

const navigation=useNavigation()
    const dispatch=useDispatch();
    return (
    <SafeAreaView style={tw`bg-white h-full w-full`}>
      <View style={tw`p-5`}>
        <Image source={uberlogo} style={styles.logo}/>
        <GooglePlacesAutocomplete
        query={{
            key:'AIzaSyAwSAn16kd-Ibt3gya97c_csscJcm8VFUE',
            language:'en'
        }} 
        placeholder='Where from?'
        nearbyPlacesAPI='GooglePlacesSearch'    
        debounce={400}
        minLength={2}
        onPress={(data,details)=>{
            dispatch(setOrigin(details))
            
            dispatch(setDescription(data))
        {console.log("from origin>"+data.description)}
        // {console.log(details)}
        }}
        fetchDetails={true}
        styles={{container:{flex:0},textInput:{fontSize:18}}}
        
        />
        {/* where to */}
        <View><Text>Where to go</Text></View>
        <GooglePlacesAutocomplete
        query={{
            key:'AIzaSyAwSAn16kd-Ibt3gya97c_csscJcm8VFUE',
            language:'en'
        }} 
        placeholder='Where to?'
        nearbyPlacesAPI='GooglePlacesSearch'    
        deb ounce={400}
        minLength={2}
        onPress={(data,details)=>{
            dispatch(setDestination(details))
             
            dispatch(setDestinationDescription(data))
        {console.log("from where >"+data.description)}
        {console.log(details)}
          navigation.navigate("Rideoptions")
        }}
        fetchDetails={true}
        styles={{container:{flex:0},textInput:{fontSize:18}}}
        
        />

        {/*  */}
        <NavOptions/>
            <NavFavorite/>
        </View>
        
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
    text:{
        color:"blue",
    },
    logo:{
        width:100,
        height:100,
        resizeMode:'contain',
    }
})