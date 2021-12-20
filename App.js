import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import { Provider } from "./src/context/BlogContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const navigator = createStackNavigator(
//   {
//     Index: IndexScreen,
//     Show: ShowScreen,
//     Create: CreateScreen,
//   },
//   {
//     initialRouteName: "Index",
//     defaultNavigationOptions: {
//       title: "Blogs",
//     },
//   }
// );
// createAppContainer creates a simple component with a navigator included.
// const App = createAppContainer(navigator);
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          defaultNavigationOptions={{ title: "Blogs" }}
        />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
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
