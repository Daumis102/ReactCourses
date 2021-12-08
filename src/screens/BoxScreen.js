import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    // Main Box layout properties:
    // margin
    // marginVertical
    // marginHorizontal
    // padding
    // paddingVertical
    // paddingHorizontal
    // borderWidth
    return (<View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box Screen 1</Text>
        <Text style={styles.textStyle}>Box Screen 2</Text>
        <Text style={styles.textStyle}>Box Screen 3</Text>
    </View>);
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flexDirection: 'column',
        height: 200,
        justifyContent: "space-evenly", // Opposite to alignItems direction-wise
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red',
    }
});

export default BoxScreen;