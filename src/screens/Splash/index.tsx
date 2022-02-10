import { Image, Text } from 'react-native';
import { AnimationSplash } from './components/AnimationSplash';
import Logo from '../../assets/Png/Logo.png'
import { Container } from './styles';

const Splash: React.FC = () => {
  return (
    <Container>
      <AnimationSplash/>
      <Image  source={require("../../assets/Png/Logo.png")} />
    </Container>
  );
};

export default Splash;
