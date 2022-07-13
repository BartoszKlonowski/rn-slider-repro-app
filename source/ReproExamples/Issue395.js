import Slider from "@react-native-community/slider";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export function Issue395() {
  const [controlledValue, setControlledValue] = useState(0);
  const [onValueChangeCounter, increaseOnValueChangeCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setControlledValue((v) => v + 1);
    }, 500);
  }, []);

  const interrupt = (value) => {
    setControlledValue(value);
    increaseOnValueChangeCounter(onValueChangeCounter + 1);
    console.log("interrupt controlledValue to be: ", value);
  };

  return (
    <View style={styles.mainLayout}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={controlledValue}
        onValueChange={interrupt}
        step={20}
        tapToSeek
      />
      <Text>Current controlled value: {controlledValue}</Text>
      <Text>onValueChanged called times: {onValueChangeCounter}</Text>
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
