import { ActivityIndicator } from 'react-native';
import { Container, Spinner } from './styles';


export function Load(){
  

  return (
    <Container>
      <Spinner 
        color='#5636d3'
        size="large"
      />
    </Container>
  );
}
