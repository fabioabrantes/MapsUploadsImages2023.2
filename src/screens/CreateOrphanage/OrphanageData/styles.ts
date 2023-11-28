import styled from "styled-components/native";
import {Feather} from '@expo/vector-icons';

export const ContainerScroll = styled.ScrollView`
  flex:1;
  margin:0 12px;
`;

export const Title = styled.Text`
  color:#5c8599;
  font-size: 24px;
  font-family:Nunito_700Bold;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom-width: 0.8px;
  border-bottom-color:#D3E2E6;
`;

export const Label = styled.Text`
  color:#8fa7b3;
  font-family: Nunito_600SemiBold;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput.attrs({
  textAlignVertical: 'top'
})`
  background-color: #fff;
  border-width: 1.4px;
  border-color: #d3e2e6;
  border-radius: 20px;
  height: 56px;
  padding: 18px 24px;
  margin-bottom: 16px;
`;

export const InputArea = styled.TextInput.attrs({
  textAlignVertical: 'top'
})`
  background-color: #fff;
  border-width: 1.4px;
  border-color: #d3e2e6;
  border-radius: 20px;
  height: 56px;
  padding: 18px 24px;
  margin-bottom: 16px;
  height:110px;
`;

export const ContainerUploadImage = styled.View`
  flex-direction:row;
`;

export const Picture = styled.Image`
  width:64px;
  height:64px;
  border-radius:20px;
  margin-bottom:32px;
  margin-right:8px;
`;

export const ButtonUploadImages = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.5);
  border-style:dashed;
  border-color:#96D2F0;
  border-width: 1.4px;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Icon = styled(Feather)``;

export const ContainerSwitch = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Switch = styled.Switch``;

export const NextButton = styled.TouchableOpacity`
  background-color: #15c3d6;
  border-radius: 20px;
  justify-content: center;
  align-items:center;
  height: 56px;
  margin-top: 32px;
  margin-bottom:12px;
`;

export const TextNextButton = styled.Text`
  color:#fff;
  font-family: Nunito_800ExtraBold;
  font-size: 16px;
`;









