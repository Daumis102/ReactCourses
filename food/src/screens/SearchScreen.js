import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter((result) => result.price === price);
  };

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList results={filterResultsByPrice('$$')} title="A Bit pricies" />
        <ResultsList results={filterResultsByPrice('$$$')} title="A big spender" />
      </ScrollView>
    </>
  ); // Using an empty tag instead of a View element makes sure that noe content is displayed off screen.
  // If we using a View component we would have to add a flex:1 style because by default it extends beyong the nav bar at the bottom
};

const styles = StyleSheet.create({});

export default SearchScreen;
