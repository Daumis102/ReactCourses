import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { TabRouter } from "react-navigation";

const EditButton = ({ props }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate("Edit", { id: props.route.params.id })
      }
    >
      <FontAwesome name="pencil" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
});

export default EditButton;
