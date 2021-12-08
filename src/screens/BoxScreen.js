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
        <Text style={styles.textOneStyle}>Box Screen 1</Text>
        <Text style={styles.textTwoStyle}>Box Screen 2</Text>
        <Text style={styles.textThreeStyle}>Box Screen 3</Text>
    </View>);
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        alignItems: 'stretch',
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        alignSelf: 'center', // overrides the alignItems of the parent for this element
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },
});

export default BoxScreen;