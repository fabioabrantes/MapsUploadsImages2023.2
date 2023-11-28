import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {OrphanagesMap} from '../screens/OrphanagesMap';
import {OrphanageDetails} from '../screens/OrphanageDetails';
import {OrphanageData} from '../screens/CreateOrphanage/OrphanageData';
import {SelectMapPosition} from '../screens/CreateOrphanage/SelectMapPosition';
import {Header} from '../components/Header';

const {Navigator, Screen} = createNativeStackNavigator();

export function Routes(){
  return (
    <Navigator 
      screenOptions={{headerShown:false}}
      initialRouteName='OrphanagesMap'
    >
      <Screen name="OrphanagesMap" component={OrphanagesMap}/>
        
      <Screen  
        name="OrphanageDetails" 
        component={OrphanageDetails}
        options={{
          headerShown:true,
          header: ()=> <Header title='Detalhes da Associação' screenBack="OrphanagesMap" />
        }}
      />

      <Screen  
        name="SelectMapPosition" 
        component={SelectMapPosition}
        options={{
          headerShown:true,
          header: ()=> (<Header title='Escolha a localização' screenBack="OrphanagesMap"showIconeX={true}/>)
        }}
      />

      <Screen  
        name="OrphanageData" 
        component={OrphanageData}
        options={{
          headerShown:true,
          header: ()=> (<Header title='Informe os Dados' screenBack="SelectMapPosition" showIconeX={true}/>)
        }}
      />
    </Navigator>

  );
}
