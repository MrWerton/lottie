import styled from 'styled-components/native';
import {DrawerContentScrollView} from '@react-navigation/drawer'
import { AntDesign } from '@expo/vector-icons';
export const Scroll = styled(DrawerContentScrollView)`
    background-color: red;
`;
export const ProfileContainer = styled.View`
    align-items: center;
    justify-content: center;
    height: 150px;
    margin: 56px 0;
    
`;
export const Wrapper = styled.View`
    width: 86px;
    padding: 10px;
    background-color: red;
    height: 86px;
    border-radius: 43px;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
`;
export const ImageUser = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
`;
export const Name = styled.Text`
    margin-top: 10px;
    font-size: 20px;
    color: green;
`;
export const NavContainer = styled.View`
`;
export const WrapperBtn = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`
export const CloseApp = styled.TouchableOpacity`
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 15px;
    border: 1px solid #FF8888;
 
    border-radius: 40px;
    
`

export const Icon = styled(AntDesign)`
    transform: scale(-1);
    color: #FF8888;
    font-size: 24px;
    
`
export const Title = styled.Text`
    font-size: 16px;
    margin-left: 30px;
    color: #FF8888;
   
`