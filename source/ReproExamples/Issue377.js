import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue377() {
  const initialValue = 50;
  const [currentValue, setCurrentValue] = useState(0);

  console.log("Starting slider example with value: ", initialValue);
  const onChange = (value) => {
    setCurrentValue(value);
    console.log("onChange.value: ", value);
  };

  return (
    <View style={styles.mainLayout}>
      <Text>Slider initial value: {initialValue}</Text>
      <Slider
        onValueChange={onChange}
        minimumValue={0}
        maximumValue={100}
        value={0}
      />
      <Text>Current value: {currentValue}</Text>
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
