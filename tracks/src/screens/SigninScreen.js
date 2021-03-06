import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation }) => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation, clearErrorMessage]);
  return (
    <KeyboardAvoidingView>
      <ScrollView style={styles.contentContainerStyle}>
        <View style={styles.container}>
          <AuthForm
            headerText={'Sign in for Tracker'}
            errorMessage={state.errorMessage}
            submitButtonText={'Sign In'}
            onSubmit={signin}
          />
          <NavLink text={"Don't have an account? Sign up instead"} routeName={'SignUp'} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', marginBottom: 200 },
  contentContainerStyle: { paddingVertical: 150 },
});

export default SigninScreen;
