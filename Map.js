
import React, { useEffect, useRef } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; 

import tw from 'tailwind-react-native-classnames';
import { useSelector } from 'react-redux';
import { setOrigin } from '../navSlice/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import NavFavorite from './NavFavorite';
export default function Map() {
const {origin,destination,description,DestinationDescription}=useSelector(state=>state.nav)
const origin1 = {latitude: origin.geometry.location.lat, longitude:origin.geometry.location.lng};
const destination1 = {latitude:destination.geometry.location.lat, longitude:destination.geometry.location.lng};
const defaultdestination={latitude:"37.78825",longitude:"67.06731"}
// latitude:destination.geometry.location.lat, longitude:destination.geometry.location.lng
const mapref=useRef(null)
useEffect(()=>{
if(!origin||!destination1) return;
// Zoom and fit to markers
mapref.current.fitToSuppliedMarkers(['origin','destination'])

},[origin1,destination1])

return (
    <>
<MapView
       ref={mapref}
       provider={PROVIDER_GOOGLE}
       style={tw`flex-1`}
       region={{
         latitude:origin.geometry.location.lat,
         longitude: origin.geometry.location.lng,
         latitudeDelta: 0.005,
         longitudeDelta: 0.005,
       }}
     >


<Marker coordinate={{
      latitude:origin.geometry.location.lat,
      longitude:origin.geometry.location.lng,
     }}
     title='Origin1'
     description={description.description}
     identifier='origin'
     />

{/* {console.log(destination.geometry.location.lat)} */}

    
      {origin1&&destination1&&(
        <MapViewDirections 
        origin={origin1}
        destination={destination1}
        strokeColor='black'
        strokeWidth={3}
        apikey='AIzaSyAwSAn16kd-Ibt3gya97c_csscJcm8VFUE'
        />
      )}
      {/* latitude:"37.78825", longitude:"-122.4324" */}
        <Marker coordinate={{
        latitude:destination.geometry.location.lat,
        longitude:destination.geometry.location.lng,
      }}
      title='Destination'
      description={DestinationDescription.description} 
      identifier='destination'
      />
  {console.log(DestinationDescription.description)}
     </MapView>
     </>
  )
}

// // latitude: 37.78825,
// // longitude: -122.4324,