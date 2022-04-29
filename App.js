import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Exercises from './screens/Exercises';
import TermsOfService from './screens/TermsOfService';
import PrivacyPolicy from './screens/PrivacyPolicy';
import Charts from './screens/Charts';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();




export default function App() {

 
 


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name='Terms of Service' component={TermsOfService} />
        <Stack.Screen name='Privacy Policy' component={PrivacyPolicy} />
        <Stack.Screen name='Exercises' component={Exercises} options={{ headerShown: false }}/>
        <Stack.Screen name='Charts' component={Charts} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
