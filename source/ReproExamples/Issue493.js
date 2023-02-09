import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue493() {
  const [currentValue, setCurrentValue] = useState(0);
  const [direction, setDirection] = useState("none");

  return (
    <View style={styles.mainLayout}>
      <Slider
        style={styles.thumbSlider}
        minimumValue={0}
        maximumValue={100}
        thumbTouchSize={{ width: 100, height: 100 }}
        value={1}
        onValueChange={(value) => {
          setDirection(value > currentValue ? "right" : "left");
          setCurrentValue(value);
        }}
        onSlidingComplete={() => setDirection("none")}
        minimumTrackTintColor={"blue"}
        maximumTrackTintColor={"green"}
      />
      <Text>Direction: {direction}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  thumbSlider: {
    width: "100%",
    height: 150,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
  },
});
