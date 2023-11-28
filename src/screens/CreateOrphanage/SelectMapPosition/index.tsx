import { useEffect, useState } from 'react';
import {MapPressEvent, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import * as Location from 'expo-location';

import mapMarker from '../../../images/map-marker.png';

import { 
  Container, 
  MapContainer, 
  NextButton, 
  TextNextButton 
} from './styles';
import { Alert } from 'react-native';

type Coords={
  latitude:number;
  longitude:number;
}
export function SelectMapPosition(){
  const [currentLocation,setCurrentLocation] = useState<Coords |null>(null);
  
  const navigation = useNavigation();

  const [position,setPosition] = useState({latitude:0,longitude:0});

  async function getMyLocation(){
    
    let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Habilite a permissão para obter localização!");
          return;
      }
      let location = await Location.getCurrentPositionAsync();
      setCurrentLocation(location.coords);
 
  }

  function handleSelectMapPosition(event:MapPressEvent){
    setPosition(event.nativeEvent.coordinate);
  }
  
  function handleNextStep(){
    navigation.navigate('OrphanageData',{position});
  }

  useEffect(()=>{
    getMyLocation()
  },[]);

  return (
    <Container>
      {currentLocation &&
      
        <MapContainer
          initialRegion={{
            latitude:currentLocation.latitude,
            longitude:currentLocation.longitude,
            latitudeDelta:0.008,
            longitudeDelta:0.008,
          }}
          onPress={handleSelectMapPosition}
          showsUserLocation
        >

          {position.latitude !== 0 && (
            <Marker 
            icon={mapMarker}
            coordinate ={{
              latitude:position.latitude,
              longitude: position.longitude,
            }}
          />
        )}
          
        </MapContainer>
      }

      {position.latitude !== 0 && (
      <NextButton onPress={handleNextStep}>
        <TextNextButton >Próximo</TextNextButton>
      </NextButton>
      )}
    </Container>
  );
}
