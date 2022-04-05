import React from "react";
import { View, Text, Button } from "react-native";

export function Issue1234({ route, navigation }) {
  const { issue } = route.params;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{issue}</Text>
      <Button title="Go Back!" onPress={() => navigation.goBack()} />
    </View>
  );
}
