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
        <View style={styles.firstRowStyle}>
            <Text style={styles.appBoxStyle}>App</Text>
        </View>
        <View style={styles.secondRowStyle}>
            <Text style={styles.redBoxStyle}></Text>
            <Text style={styles.purpleBoxStyle}></Text>
        </View>
        <View style={styles.thirdRowStyle}>
            <Text style={styles.greenBoxStyle}></Text>
        </View>
        

    </View>);
};

const styles = StyleSheet.create({
    viewStyle: {
        height: 200,
    },
    firstRowStyle: {},
    secondRowStyle: {
        justifyContent: "space-between",
        flexDirection: "row"
    },
    thirdRowStyle: {
        alignItems: "center"
    },
    appBoxStyle: {
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
    },
    redBoxStyle: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'red',
        width: 20,
        height: 20,

    },
    purpleBoxStyle: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'purple',
        width: 20,
        height: 20,
    },
    greenBoxStyle: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'green',
        width: 20,
        height: 20,
    },
});

export default BoxScreen;