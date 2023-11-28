import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';

export const Container = styled.View`
  padding:24px;
  background-color:#f9fafc;
  padding-top:44px;

  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`;

export const Button = styled.TouchableOpacity``;

export const Icon = styled(Feather)``;

export const Title = styled.Text`
  font-family:Nunito_600SemiBold;
  color:#8fa7b3;
  font-size:16px;
`;

export const Content = styled.View``;

