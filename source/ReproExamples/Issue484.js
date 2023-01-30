import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue484() {
  const [enabled, setEnabled] = useState(true);

  return (
    <View style={styles.mainLayout}>
      <Slider
        disabled={!enabled}
        minimumValue={0}
        maximumValue={100}
        value={0}
      />
      <Button
        title={enabled ? "Disable" : "Enable"}
        onPress={() => setEnabled(!enabled)}
      />
      <Text>{`Slider is ${enabled ? "enabled" : "disabled"}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
