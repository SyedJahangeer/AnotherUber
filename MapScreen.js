import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from './Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from './NavigateCard'
import Rideoptions from './Rideoptions'
import RideOptionsCard from './RideOptionsCard'
export default function MapScreen({navigation}) {
  const Stack=createNativeStackNavigator()
  return (
    <View>
<View style={tw`h-1/2`}>
  <Map/>
</View>
<View style={tw`h-1/2`}>
<Stack.Navigator>
<Stack.Screen name="NavigateCard" component={NavigateCard} options={{headerShown:false}}/>
<Stack.Screen name='Rideoptions' component={Rideoptions} options={{headerShown:false,}}/>
<Stack.Screen name='RideOptionsCard' component={RideOptionsCard} options={{headerShown:false,}}/>

</Stack.Navigator>
</View>
    </View>
  )
}