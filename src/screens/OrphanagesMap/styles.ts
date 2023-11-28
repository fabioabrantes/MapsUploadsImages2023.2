import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import  MapView from 'react-native-maps';
import {Dimensions, View} from 'react-native';

export const Container = styled.View`
  flex:1;
`;

export const ContainerMap = styled(MapView)`
  width:${Dimensions.get('window').width}px;
  height:${Dimensions.get('window').height}px;
`;

export const ContainerCallout = styled.View`
  width:168px;
  height:46px;
  background-color:rgba(255,255,255,0.8);
  border-radius:16px;
  justify-content:center;
  padding-left:16px;
  padding-right:16px;
`;

export const TextCallout = styled.Text`
  color:#8889a5;
  font-size:14px;
  font-family:Nunito_700Bold;
`;

export const ContainerFooter = styled(View)`
  position:absolute;
  left:24px;
  right:24px;
  bottom:32px;

  background-color: #fff;
  border-radius:28px;
  height:46px;
  padding-left:24px;

  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;

export const TextFooter = styled.Text`
  color:#8fa7b3;
  font-family:Nunito_700Bold;
`;

export const Button = styled.TouchableOpacity`
  width:56px;
  height:56px;
  background-color:#15c3d6;
  border-radius:28px;
  justify-content:center;
  align-items:center;
`;

export const Icon = styled(Feather)``;
