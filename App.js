import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import SignUp from './src/screens/signUp';
import SignIn from './src/screens/signIn';
import Home from './src/screens/home';
import TaskDetail from './src/screens/taskDetail';
import ListDetail from './src/screens/listDetail';
import Header from './src/components/Header';
const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={console.warn}
      />
    );
  } else
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: 'Sign In', headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: 'Sign Up', headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Home', headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="ListDetail"
            component={ListDetail}
            options={{ title: 'List Detail', headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="TaskDetail"
            component={TaskDetail}
            options={{ title: 'Task Detail', headerShown: false }}
          ></Stack.Screen>
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
