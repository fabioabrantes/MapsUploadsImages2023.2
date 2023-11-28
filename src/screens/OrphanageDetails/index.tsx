import {useEffect,useState} from 'react';
import { Linking} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useRoute} from '@react-navigation/native';

import {Load} from '../../components/Load';

import mapMarker from '../../images/map-marker.png';

import api from '../../services/api';
import Association from '../../dto/Issociation';

import { 
  Button, 
  ContainerImages, 
  ContainerMap, 
  ContainerOrphanage, 
  ContainerSchedule, 
  ContainerScheduleItemBlue, 
  ContainerScheduleItemGreen, 
  ContainerScheduleItemRed, 
  ContainerScroll, 
  Description, 
  Icon, 
  Map, 
  Picture, 
  ScrollImages, 
  Separator, 
  TextButton, 
  TextScheduleItemBlue, 
  TextScheduleItemGreen, 
  TextScheduleItemRed, 
  Title 
} 
from './styles';


interface ImageUrl{
  id:number;
  url:string;
}
interface IAssociation extends Association{
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  imagesPath:Array<ImageUrl> 
}

interface ParamsId{
  id:number;
}
export function OrphanageDetails(){
  const [association, setAssociation] = useState<IAssociation>();

  const route = useRoute();
  const {id} = route.params as ParamsId;
  console.log(id);

  useEffect(()=>{
    api.get(`associations/detail/${id}`).then(response=>{
      console.log(response.data)
      setAssociation(response.data);
   })
 },[id]);


 function handleOpenGoogleMapsRoute(){
   Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${association?.latitude},${association?.longitude}`);
 }
 
 if(!association){
  return <Load />
}

  return (
    <ContainerScroll>
      <ContainerImages>
        <ScrollImages  horizontal pagingEnabled>
          {
            association.imagesPath && association.imagesPath.map(image=>{
              return (
                <Picture key={image.id} source={{uri:image.url}}/>
              )
            })
          }
        </ScrollImages>

      </ContainerImages>

      <ContainerOrphanage>
        <Title>{association.name}</Title>

        <Description>{association.about}</Description>
        
        <ContainerMap>
          <Map 
            initialRegion={{
              latitude:association.latitude,
              longitude:association.longitude,
              latitudeDelta:0.008,
              longitudeDelta:0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker 
              icon={mapMarker}
              coordinate={{ 
                latitude:association.latitude,
                longitude:association.longitude,
              }}
            />
          </Map>
            
          <Button onPress={handleOpenGoogleMapsRoute}>
            <TextButton> ver rotas no google maps</TextButton>
          </Button>
        </ContainerMap> 
      </ContainerOrphanage>

      <Separator/>

      <Title>Instruções para visitar</Title>

      <Description>{association.instructions}</Description>
      
      <ContainerSchedule>
        <ContainerScheduleItemBlue >
          <Icon name="clock" size={40} color="#2ab5d1"/>
          <TextScheduleItemBlue> 
            Segunda à sexta {association.opening_hours}
          </TextScheduleItemBlue>
        </ContainerScheduleItemBlue>
       
       {association.open_on_weekends? (
           <ContainerScheduleItemGreen>
              <Icon name="clock" size={40} color="#2ab5d1"/>
              
              <TextScheduleItemGreen> 
                Atendemos no final de semana
              </TextScheduleItemGreen>
          </ContainerScheduleItemGreen>

       ):(
        <ContainerScheduleItemRed>
            <Icon name="clock" size={40} color="#ff669d"/>
            
            <TextScheduleItemRed> 
              Atendemos no final de semana
            </TextScheduleItemRed>
          </ContainerScheduleItemRed>
       )} 
      </ContainerSchedule>
    </ContainerScroll>
  );
}