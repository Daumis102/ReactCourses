import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');
    return (<View>
        <Text>Enter your Password</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none" // Depending on iOS and Android versions sometimes the first letter might get capitalized by default
            autoCorrect={false} // When entering password, emails, usernames etc we usually don't want autocorrect to work
            value={password}
            onChangeText={(newValue) => setPassword(newValue)}
        />
        {password.length < 5 ? <Text>Password should be longer than 5 characters.</Text> : null}
    </View>);
}

const styles = StyleSheet.create({
    input: { // by dedfault TextInput has 0 styling, so we have to add something
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;