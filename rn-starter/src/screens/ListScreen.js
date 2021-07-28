import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1', age: '20' },
        { name: 'Friend 2', age: '22' },
        { name: 'Friend 3', age: '20'  },
        { name: 'Friend 4', age: '25'  },
        { name: 'Friend 5', age: '28'  },
        { name: 'Friend 6', age: '23'  },
        { name: 'Friend 7', age: '21'  },
        { name: 'Friend 8', age: '20'  },
    ];
    return (
        <FlatList
            //horizontal // makes it true
            //showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name }
            data={friends}
            //renderItem={(element) => { }} // 'element' is not just an object from the friends list. element === {item: {name: 'friend..'}, index: 0} we can only take required object using destructurization
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text> 
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;