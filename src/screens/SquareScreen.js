import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

// Could define this inside the SquareScreen, but then it would be difficult to understand which state variable refers to what.
const reducer = (state, action) => {
    // Reducer is used for maintaining the state of very similar variables which change in a clearly defined way
    // It has to always return a variable like its first arg, and the first arg can never be edited directly.
    // state === {red: Number, green: Number, blue:Number}; <- reminder of what the object looks like
    // action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

    switch (action.colorToChange) {
        case 'red':
            if (state.red + action.amount > 255 || state.red + action.amount < 0)
                return state;
            return { ...state, red: state.red + action.amount }; // We don't want to change the state. Instead we recreate it from scratch with a new updated value.
        case 'green':
            if (state.green + action.amount > 255 || state.green + action.amount < 0)
                return state;
            return { ...state, green: state.green + action.amount };
        case 'blue':
            if (state.blue + action.amount > 255 || state.blue + action.amount < 0)
                return state;
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    return <View>
        <ColorCounter
            onIncrease={() => dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })}  // dispatch actually just means 'runMyReducer' and takes in an object of action format defined in the reducer.
            onDecrease={() => dispatch({ colorToChange: "red", amount: -COLOR_INCREMENT })}
            color="Red" />
        <ColorCounter
            onIncrease={() => dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: "green", amount: -COLOR_INCREMENT })}
            color="Green" />
        <ColorCounter
            onIncrease={() => dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })}
            onDecrease={() => dispatch({ colorToChange: "blue", amount: -COLOR_INCREMENT })}
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