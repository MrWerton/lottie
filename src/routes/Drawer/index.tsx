import { MaterialIcons,FontAwesome5 , Feather, AntDesign} from '@expo/vector-icons'; 
import React from 'react'
import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import Home from '../../screens/Home';
import  Scheduling from '../../screens/Scheduling';
import CreditCard from '../../screens/CreditCard';
import FamilyGroup from '../../screens/FamilyGroup';
import {Text, TouchableOpacity, View} from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

export type ParamsProps = {
  Home: undefined;
  Scheduling: undefined;
  CreditCard: undefined;
  FamilyGroup: undefined;
  Cart: undefined;
  Notifications: undefined;
  Profile: undefined;
  ExamImage: undefined;
  ExamLab: undefined;
  Procedures: undefined;
  Consultas: undefined;
  Estimate: undefined;
  FormPersonalData: undefined;
  Dentistry: undefined;
  SignUp: undefined;
  QueriesDate: undefined;
  QueriesMed: undefined;
  QueriesEspec: undefined;

};

const {Screen, Navigator} = createDrawerNavigator<ParamsProps>();
import {HeaderBackground} from '@react-navigation/elements'
import { Image } from 'react-native';
import { NavBar } from './components/NavBar';


const Drawer: React.FC = ({}) => {
  
    return (
       <Navigator
       initialRouteName='Home'
       drawerContent={(props)=> <NavBar {...props} />}
       screenOptions={({navigation})=>({   
         drawerType: 'slide',
         drawerActiveTintColor: '#42B19E',
         drawerInactiveTintColor: '#595959',
         headerBackground: ()=><HeaderBackground style={{borderBottomColor:'#F4F7FE', borderBottomWidth: 1, justifyContent: 'space-between', alignItems:'center', backgroundColor: '#fff'}} />,
         headerTitle: ()=>(
          <Image style={{ resizeMode: 'cover' }} source={require("../../assets/Png/Logo.png")} />
         ),
         headerTitleAlign:'center',
         headerRight: ()=>(
            <View style={{flexDirection: 'row', marginRight: 15, }}>
              <TouchableOpacity 
              onPress={()=>{
                navigation.navigate('Notifications');
              }}
              style={{marginRight: 14}}>
                 <Ionicons name="notifications" size={26} color="#42B19E" />
              </TouchableOpacity >
              <TouchableOpacity onPress={()=>{navigation.navigate('Cart');
              }}>
                
                <View style={{width: 14, height: 14,alignItems: 'center', justifyContent: 'center', borderRadius: 7, backgroundColor: 'white', position: 'absolute', right: 0, top: 0, zIndex: 111}}>
                  <Text style={{fontSize: 9, color: '#42B19E'}}>{10}</Text>
                </View>
                  
                <FontAwesome5 name="shopping-cart" size={25} color="#42B19E" />
              </TouchableOpacity>
            </View>
         ),
         headerLeft: ()=>( 
            <TouchableOpacity onPress={()=>{
              navigation.toggleDrawer();
            }} style={{marginLeft: 15}}>
                <View style={{borderWidth: 1, padding: 4, borderRadius: 5, borderColor: '#42B19E', }} >
                <AntDesign name="menu-fold" size={24} color="#42B19E" />
                </View>
            </TouchableOpacity>
          ),
          
        })}>
          <Screen 
          name="Home" 
          component={Home}
          options={{
            title:"Inicio",
            drawerIcon: ({color}) => (
            <FontAwesome5 name="home" size={24} color={color} />)}}
          />
          <Screen 
          name="Scheduling" 
          component={Scheduling}
          options={{
            title:"Agendamentos",
            drawerIcon: ({color}) => (
            <FontAwesome5 name="calendar-alt" size={24} color={color} />)}}
          />
          <Screen 
          name="CreditCard"
          component={CreditCard}
          options={{
            title:"Seus Cartões",
            drawerIcon: ({color}) => (
              <Feather name="credit-card" size={24} color="black" />)}}
          />
          <Screen 
          name="FamilyGroup" 
          component={FamilyGroup}
          options={{
            title:"Grupo Familiar",
            drawerIcon: ({color}) => (
            <MaterialIcons name="group" size={24} color={color} />)}}
          />
      </Navigator>
)}





export default Drawer;