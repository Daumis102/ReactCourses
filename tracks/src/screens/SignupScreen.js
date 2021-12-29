import React, { useState, useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Spacer from '../components/Spacer.js';
import { Context as AuthContext } from '../context/AuthContext.js';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.contentContainerStyle}>
        <View style={styles.container}>
          <Spacer>
            <Text h3>Sign Up for Tracker</Text>
          </Spacer>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {state.errorMessage ? (
            <Text style={styles.errorMessage}>{state.errorMessage}</Text>
          ) : null}
          <Spacer>
            <Button title="Sign Up" onPress={() => signup(email, password)} />
          </Spacer>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.link}>Already have an account? Sign in instead</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', marginBottom: 200, paddingVertical: 150 },
  contentContainerStyle: {},
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
  },
  link: {
    color: 'blue',
  },
});

export default SignupScreen;
