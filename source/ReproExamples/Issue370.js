import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue370() {
  const [defaultValue, setDefaultValue] = useState(0);

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>
        Slider with default direction:
      </Text>
      <Text>
        Which should be changed to RTL according to the language
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={defaultValue}
        onValueChange={setDefaultValue}
      />
      <Text>Value: {defaultValue}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  sliderIntroText: {
    fontSize: 20,
    margin: 5,
  },
});
