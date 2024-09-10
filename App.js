import React from 'react';
import {NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/Login';
import RegisterScreen from './screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
<Stack.Navigator initialRouteName="login" screenOptions={{headerShown: false, headerTitleAlign: 'center', headerBackVisible: false, headerLargerStyle: true}}>
  <Stack.Screen name="Login" component={LoginScreen}  />
  <Stack.Screen name="Register" component={RegisterScreen}/>
</Stack.Navigator>
   </NavigationContainer>
  );
}


