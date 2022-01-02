import React, { useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Button, Text, ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  console.log(state);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {});
    fetchTracks();
    return unsubscribe;
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 48 }}>Track List Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron />
              </ListItem>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TrackListScreen;
