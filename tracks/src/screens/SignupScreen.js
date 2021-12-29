import React, { useContext } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Context as AuthContext } from '../context/AuthContext.js';
import AuthForm from '../components/AuthForm.js';
import NavLink from '../components/NavLink.js';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.contentContainerStyle}>
        <View style={styles.container}>
          <AuthForm
            headerText={'Sign up for Tracker'}
            errorMessage={state.errorMessage}
            submitButtonText={'Sign Up'}
            onSubmit={signup}
          />
          <NavLink text={'Already have an account? Sign in instead'} routeName={'SignIn'} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', marginBottom: 200 },
  contentContainerStyle: { paddingVertical: 150 },
});

export default SignupScreen;
