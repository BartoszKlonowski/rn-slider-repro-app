import React from "react";
import { View, Text } from "react-native";
import screens from "../ReproExamples/Issues";
import { ReproWidget } from "../ReproWidget";

export function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      {screens.map((issue) => (
        <ReproWidget
          navigation={navigation}
          issueReproExample={issue.name}
          key={issue.name}
        />
      ))}
    </View>
  );
}
