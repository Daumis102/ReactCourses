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
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { navigationRef } from './src/navigationRef';

const AuthStackNavigator = createNativeStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();
const TrackListStackNavigator = createNativeStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator options={{ default: 'ResolveAuth' }}>
      <AuthStackNavigator.Screen
        name="ResolveAuth"
        component={ResolveAuthScreen}
        options={{ animationEnabled: false, headerShown: false }}
      ></AuthStackNavigator.Screen>
      <AuthStackNavigator.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          title: 'Sign Up',
          animationEnabled: false,
          headerShown: false,
        }}
      ></AuthStackNavigator.Screen>
      <AuthStackNavigator.Screen
        name="SignIn"
        component={SigninScreen}
        options={{
          title: 'Sign In',
          animationEnabled: false,
          headerShown: false,
        }}
      ></AuthStackNavigator.Screen>
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
        options={{ headerShown: false }}
      ></BottomTabNavigator.Screen>
    </BottomTabNavigator.Navigator>
  );
};

export default function App() {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <NavigationContainer ref={navigationRef}>
            <AuthNavigator />
          </NavigationContainer>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
}
