import { DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CloseApp,Icon,ImageUser,Name,NavContainer,ProfileContainer,Scroll,Title,Wrapper, WrapperBtn } from './styles';
import { FontAwesome5 } from '@expo/vector-icons'; 

const NavBar: React.FC<DrawerContentComponentProps> = (props) => {
   return (
    <>
    {true? <Scroll contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
      <NavContainer>
      <ProfileContainer>
        <Wrapper>
          <ImageUser source={{uri:`hrr `}}/>
        </Wrapper>
         <Name>
          {'false'}
         </Name>
         <TouchableOpacity
              onPress={()=>console.log('x')}
              style={{backgroundColor: "#42B19E", paddingHorizontal: 15, marginTop: 15, borderRadius: 5}}
         >
          
         </TouchableOpacity>
      </ProfileContainer>
        <DrawerItemList {...props} />
      </NavContainer>
      <WrapperBtn>
        <CloseApp onPress={()=>{props.navigation.navigate('Home')}}>
            <Icon name="logout" />
            <Title>
              Sair
            </Title>
        </CloseApp>
      </WrapperBtn>
 </Scroll>
 : 
 <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 120}}>
 <FontAwesome5 name="user-circle" size={100} color="#222" />
 <Text style={{textAlign: 'center', color:"#222",fontSize: 16, paddingVertical:10}}>Entre na nossa plataforma e agende sua consulta</Text>
 <TouchableOpacity
              onPress={()=>console.log('sss')}
              style={{backgroundColor: "#42B19E", paddingHorizontal: 50, marginTop: 20, borderRadius: 5}}
         >
            <Text style={{fontSize: 16,color: 'white', fontWeight: 'bold', paddingVertical: 18}}>Acessar</Text>
         </TouchableOpacity>
   </View>}
  
 </>
  );
};

export {NavBar};