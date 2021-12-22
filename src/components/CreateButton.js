import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

const CreateButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Create")}>
      <Feather name="plus" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
});

export default CreateButton;
