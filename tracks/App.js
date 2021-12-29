import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';

const AuthStackNavigator = createNativeStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();
const TrackListStackNavigator = createNativeStackNavigator();
let isSignedIn = false;

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: 'Sign Up',
          animationEnabled: false,
          headerShown: false,
        }}
      ></AuthStackNavigator.Screen>
      <AuthStackNavigator.Screen name="SignIn" component={SigninScreen}></AuthStackNavigator.Screen>
      <AuthStackNavigator.Screen
        name="MainFlow"
        component={MainNavigator}
        options={{ headerShown: false, animationEnabled: false }}
      ></AuthStackNavigator.Screen>
    </AuthStackNavigator.Navigator>
  );
};

export const TrackListNavigator = () => {
  return (
    <TrackListStackNavigator.Navigator>
      <TrackListStackNavigator.Screen
        name="TrackList"
        component={TrackListScreen}
      ></TrackListStackNavigator.Screen>
      <TrackListStackNavigator.Screen
        name="TrackDetail"
        component={TrackDetailsScreen}
      ></TrackListStackNavigator.Screen>
    </TrackListStackNavigator.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="TrackListFlow"
        component={TrackListNavigator}
        options={{ headerShown: false }}
      ></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
      ></BottomTabNavigator.Screen>
      <BottomTabNavigator.Screen
        name="Account"
        component={AccountScreen}
      ></BottomTabNavigator.Screen>
    </BottomTabNavigator.Navigator>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
