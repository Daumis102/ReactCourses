import React from "react";
import { createAppContainer } from "react-navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailsScreen from "./src/screens/TrackDetailsScreen";
import TrackListScreen from "./src/screens/TrackListScreen";

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
          title: "Sign Up",
          animationEnabled: false,
          headerShown: false,
        }}
      ></AuthStackNavigator.Screen>
      <AuthStackNavigator.Screen
        name="SignIn"
        component={SigninScreen}
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
        name="TrackDetailScreen"
        component={TrackDetailsScreen}
      ></TrackListStackNavigator.Screen>
    </TrackListStackNavigator.Navigator>
  );
};

export const MainNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        name="TrackNavigator"
        component={TrackListNavigator}
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
        {isSignedIn ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthProvider>
  );
}
