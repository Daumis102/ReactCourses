import React from "react";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import CreateButton from "./src/components/CreateButton";
import EditButton from "./src/components/EditButton";
import { Provider } from "./src/context/BlogContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditScreen from "./src/screens/EditScreen";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            title: "Blogs",
            headerRight: () => <CreateButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ route, navigation }) => ({
            headerRight: () => <EditButton props={{ route, navigation }} />,
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Instead of returning the app container straight away, we can create a more complex component and return that instead.
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
