import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler"
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import Splash from './src/screens/Splash';
import { useEffect, useState } from 'react';
import { AppRoutes } from './src/routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2500);
  
  }, []);
  const [LoadedFont] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  
if(!LoadedFont || loading){

    return <Splash/>;
  
}

  return (
      
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <AppRoutes/>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fd1f1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
