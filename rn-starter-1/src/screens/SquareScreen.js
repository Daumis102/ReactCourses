import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

// Could define this inside the SquareScreen, but then it would be difficult to understand which state variable refers to what.
const reducer = (state, action) => {
    // Reducer is used for maintaining the state of very similar variables which change in a clearly defined way
    // It has to always return a variable like its first arg, and the first arg can never be edited directly.
    // state === {red: Number, green: Number, blue:Number}; <- reminder of what the object looks like
    // action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}
    // By convention, action object contains a type which describes the action and a payload which is data needed for that action. Use this naming if you want other devs to understand you.
    switch (action.type) {
        case 'change_red':
            if (state.red + action.payload > 255 || state.red + action.payload < 0)
                return state;
            return { ...state, red: state.red + action.payload }; // We don't want to change the state. Instead we recreate it from scratch with a new updated value.
        case 'change_green':
            if (state.green + action.payload > 255 || state.green + action.payload < 0)
                return state;
            return { ...state, green: state.green + action.payload };
        case 'change_blue':
            if (state.blue + action.payload > 255 || state.blue + action.payload < 0)
                return state;
            return { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return <View>
        <ColorCounter
            onIncrease={() => dispatch({ type: "change_red", payload: COLOR_INCREMENT })}  // dispatch actually just means 'runMyReducer' and takes in an object of action format defined in the reducer.
            onDecrease={() => dispatch({ type: "change_red", payload: -COLOR_INCREMENT })}
            color="Red" />
        <ColorCounter
            onIncrease={() => dispatch({ type: "change_green", payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: "change_green", payload: -COLOR_INCREMENT })}
            color="Green" />
        <ColorCounter
            onIncrease={() => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ type: "change_blue", payload: -COLOR_INCREMENT })}
            color="Blue" />
        <View style={{
            height: 150,
            width: 150,
            backgroundColor: `rgb(${red},${green},${blue})`
        }}
        />

    </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;