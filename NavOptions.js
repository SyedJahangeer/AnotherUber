import { View, Text,FlatList,TouchableOpacity,StyleSheet,Image } from 'react-native'
import React from 'react'
import car1R from "../assets/car1R.png"
import food1 from "../assets/food1.png"
import tw from 'tailwind-react-native-classnames'
// import { Icon } from 'react-native-elements'
import  Icon  from "react-native-vector-icons/AntDesign";
import MapScreen from './MapScreen'
import { useNavigation } from '@react-navigation/native'
const data=[
    {
        id:'123',
        title:'Get a ride',
        image:car1R,
        screen:'Mapscreen',
    },
    {
        id:'456',
        title:'Order food',
        image:food1,
        screen:'EatsScreen'
    }
]

export default function NavOptions() {
    const navigation=useNavigation()
    return (
   <>
   <FlatList data={data}
    horizontal 
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
    <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}     
     onPress={()=>navigation.navigate('MapScreen')}
    > 
        <View>
            <Image source={item.image} style={styles.navImage}/>
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title} </Text>
             <Icon name='arrowright' color='white' 
              style={tw`p-2 bg-black w-10 rounded-full mt-4`}
             size={20} />   
              
        </View>
    </TouchableOpacity>
   )}/>
   </>
  )
}



const styles=StyleSheet.create({
    navImage:{
        width:100,
        height:100,
        resizeMode:"contain",

    }
})