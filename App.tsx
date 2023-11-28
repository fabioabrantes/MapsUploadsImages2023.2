import { StatusBar } from 'react-native';
import {useFonts} from 'expo-font';
import {NavigationContainer} from '@react-navigation/native';
import {
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold
} from '@expo-google-fonts/nunito';

import {Routes} from './src/routes';
import {Load} from './src/components/Load';

export default function App() {

  const [fontsLoaded] = useFonts({
    Nunito_600SemiBold, Nunito_700Bold,Nunito_800ExtraBold
  })

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {
        !fontsLoaded? <Load/> : <Routes />
      }
      
    </NavigationContainer>
  );
}