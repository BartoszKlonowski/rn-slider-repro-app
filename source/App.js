import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./Screens/HomeScreen";
import screens from "./ReproExamples/Issues";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {screens.map((screen) => (
          <Stack.Screen
            name={screen.name}
            component={screen.component}
            key={screen.name}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
