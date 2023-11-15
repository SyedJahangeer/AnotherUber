import { View, Text,TouchableOpacity,FlatList } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'
const data=[
    {
    id:"123",
    icone:"home",
    location:"Home",
    destination:"Will be soon",
},
{
    id:"124",
    icone:"home",
    location:"eat",
    destination:"Will be soon",
}

]

export default function NavFavorite() {
  
  
    return (
   <> 
   <View>
     <FlatList data={data} keyExtractor={(item)=>item.id} 
     ItemSeparatorComponent={()=>{(<View style={[tw`bg-gray-400`,{height:0.5}]}>

     </View>)}}
     renderItem={({item})=>(
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
           <Icon 
           style={tw`mr-4 rounded-full bg-gray-300 p-3`}
           name={item.icone}
           type='ionicon'
           color='white'
           size={19}
           />
           <View>
            <Text style={tw`text-black font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-black`}>{item.destination}</Text>
           </View>
           
        </TouchableOpacity>
        
     )}/>
     </View>
     </>
  )
}