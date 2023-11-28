import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import MapView from 'react-native-maps';
import {Dimensions} from 'react-native';

export const ContainerScroll = styled.ScrollView`
  flex:1;
  margin:0px 12px;
`

export const ContainerImages = styled.View`
  height:240px;
`;

export const ScrollImages = styled.ScrollView``;

export const Picture = styled.Image.attrs({
  resizeMode: "cover"
})`
  width: ${Dimensions.get('window').width}px;
  height: 240px;
`;

export const ContainerOrphanage = styled.View`
  padding:24px;
`;

export const Title = styled.Text`
  color:#4D6F80;
  font-size: 30px;
  font-family:Nunito_700Bold;
`;

export const Description = styled.Text`
  font-family:Nunito_600SemiBold;
  color:#5c8599;
  line-height:24px;
  margin-top: 16px;
`;

export const ContainerMap = styled.View`
  border-radius:20px;
  overflow: hidden;
  border-width:1.2px;
  border-color:#B3DAE2;
  margin-top:40px;
  background-color:#E6F7FB;
`;

export const Map = styled(MapView)`
  width:100%;
  height:150px;
`;

export const Button = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content:center;
  background-color:#B3DAE2;
`;

export const TextButton = styled.Text`
  font-family:Nunito_700Bold;
  color:#0089a5;
`;

export const Separator = styled.View`
  height: 0.8px;
  width:100%;
  background-color:#D3E2E6;
  margin: 30px 0;
`;

export const ContainerSchedule = styled.View`
  margin-top: 24px;
  flex-direction:row;
  justify-content:space-between;
`;

export const ContainerScheduleItemBlue = styled.View`
  width:48%;
  padding: 20px;
  border-radius: 20px;
  border-width: 1px;
  background-color:#E6F7FB;
  border-color:#B3DAE2;
`;

export const TextScheduleItemBlue = styled.Text`
  font-family:Nunito_600SemiBold;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color:#5C8599;
`;

export const ContainerScheduleItemGreen = styled.View`
  width:48%;
  padding: 20px;
  border-radius: 20px;
  border-width: 1px;
  background-color:#EDFFF6;
  border-color:#A1E9C5;
`;

export const TextScheduleItemGreen = styled.Text`
  font-family:Nunito_600SemiBold;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color:#37C77F;
`;

export const Icon = styled(Feather)``;

export const ContainerScheduleItemRed = styled.View`
  width:48%;
  padding: 20px;
  border-radius: 20px;
  border-width: 1px;
  background-color:#fef6f9;
  border-color:#ffbcd4;
`;

export const TextScheduleItemRed = styled.Text`
  font-family:Nunito_600SemiBold;
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color:#ff669d;
`;






