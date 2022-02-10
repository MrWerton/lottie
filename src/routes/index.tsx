import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './Stack';


const AppRoutes: React.FC = ({}) => {
    return (
      <NavigationContainer >
        <Stack/>
    </NavigationContainer>
)}



export {AppRoutes}