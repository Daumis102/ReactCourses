import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>Signup Screen</Text>
      <Button title="Go to Signin" onPress={() => navigation.navigate('SignIn')} />
      <Button title="Go to Main FLow" onPress={() => navigation.navigate('MainFlow')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
