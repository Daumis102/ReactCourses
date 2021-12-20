import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [business, setBusiness] = useState(null);

  const getBusiness = async (id) => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, []);

  if (!business) {
    return null;
  }

  return (
    <View>
      <Text>{business.name}</Text>
      <FlatList
        data={business.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;
