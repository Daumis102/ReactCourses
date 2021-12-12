import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, navigation}) => {
    return (<View>
        <Text style={styles.title}> {title}</Text>
        <FlatList 
            showsHorizontalScrollIndicator= {false}
            horizontal
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow')}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )
            }}>
        </FlatList>
    </View>)
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold', 
        marginLeft: 15,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10
    }
})

export default ResultsList;