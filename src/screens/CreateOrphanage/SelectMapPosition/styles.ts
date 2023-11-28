import styled from "styled-components/native";
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex:1;
  position:relative;
`;

export const MapContainer = styled(MapView)`
  width:${Dimensions.get('window').width}px;
  height:${Dimensions.get('window').height}px;
`;

export const NextButton = styled.TouchableOpacity`
  background-color: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items:center;
  height: 56px;

  position:absolute;
  left: 24px;
  right: 24px;
  bottom: 40px;
`;

export const TextNextButton = styled.Text`
  color:#fff;
  font-family: Nunito_800ExtraBold;
  font-size: 16px;
`;


