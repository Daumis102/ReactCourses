import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }
  return (
    <View>
      <Text style={styles.title}> {title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(results) => results.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default withNavigation(ResultsList); // wrapping the exported ResultsList with a withNavigation allows to access the navigation property in the component without passing it through the parent component.
