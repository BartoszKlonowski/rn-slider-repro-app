import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue96() {
  const [defaultValue, setDefaultValue] = useState(0);
  const [orangeValue, setOrangeValue] = useState(0);

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>Slider with default color of Thumb:</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={defaultValue}
        onValueChange={setDefaultValue}
      />
      <Text>Value: {defaultValue}</Text>
      <Text style={styles.sliderIntroText}>Slider with custom color of Thumb:</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={orangeValue}
        onValueChange={setOrangeValue}
        thumbTintColor={"orange"}
      />
      <Text>Value: {orangeValue}</Text>
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
  }
});
