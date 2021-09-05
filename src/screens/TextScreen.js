import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (<View>
        <Text>Enter your name</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none" // Depending on iOS and Android versions sometimes the first letter might get capitalized by default
            autoCorrect={false} // When entering password, emails, usernames etc we usually don't want autocorrect to work
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        />
        <Text>My name is: {name}</Text>
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