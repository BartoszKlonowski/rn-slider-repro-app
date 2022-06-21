import Slider from "@react-native-community/slider";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export function Issue390() {
  const [value, setValue] = useState(0);
  const [controlledValue, setControlledValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setControlledValue((v) => v + 1);
    }, 500);
  }, []);

  const onChange = (value) => {
    setValue(value);
    console.log("onChange.value: ", value);
  };

  const interrupt = (value) => {
    setControlledValue(value);
    console.log("interrupt controlledValue to be: ", value);
  };

  return (
    <View style={styles.mainLayout}>
      <Slider
        onValueChange={onChange}
        minimumValue={0}
        maximumValue={100}
        value={value}
        step={20}
        tapToSeek
      />
      <Text>Current value: {value}</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={controlledValue}
        onValueChange={interrupt}
        step={20}
        tapToSeek
      />
      <Text>Current controlled value: {controlledValue}</Text>
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
