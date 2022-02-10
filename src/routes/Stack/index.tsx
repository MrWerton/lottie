import SignUp from '../../screens/SignUp';
import Cart from '../../screens/Cart';
import Estimate from '../../screens/Estimate';
import ExamImage from '../../screens/ExamImage';
import ExamLab from '../../screens/ExamLab';
import Notification from '../../screens/Notification';
import Procedures from '../../screens/Procedure';
import Queries from '../../screens/Querie';
import Dentistry from '../../screens/Dentistry';
import QueriesMed from '../../screens/Querie/QueriesMed';
import QueriesDate from '../../screens/Querie/QueriesDate';
import QueriesEspec from '../../screens/Querie/QueriesEspec';
import { Ionicons } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';

 import Drawer from '../Drawer';
 

const {Screen, Navigator} = createStackNavigator();

function Stack() {
  return (
    <Navigator >
      <Screen 
      options={{headerShown: false, }}
      name="Inicio"
      component={Drawer} />
      <Screen name="Cart" component={Cart} 
        options={({ navigation }) => ({
          title: 'Carrinho',
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 15, alignItems: 'center', justifyContent: 'center'}} onPress={() => navigation.navigate('Home')}>
              <Ionicons style={{paddingTop: 4}} name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
        )})} />
      <Screen name="Notifications" component={Notification} />
      <Screen name="ExamImage" component={ExamImage} />
      <Screen name="ExamLab" component={ExamLab} />
      <Screen name="Procedures" component={Procedures} />
      <Screen name="Consultas" component={Queries} />
      <Screen name="Estimate" component={Estimate} />
      <Screen name="Dentistry" component={Dentistry} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="QueriesMed" component={QueriesMed}  
        options={({ navigation }) => ({
        title: 'Consulta pelo médico',
      })}/>
      <Screen name="QueriesEspec" component={QueriesEspec}  
        options={({
          title: 'Consulta pela Especialidade',
        })} 
      />
      <Screen name="QueriesDate" component={QueriesDate} 
        options={({
          title: 'Consulta pela Data',
        })} 
      />
    </Navigator>
  );
}

export {Stack};