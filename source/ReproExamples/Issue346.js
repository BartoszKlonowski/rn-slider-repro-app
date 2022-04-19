import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue346() {
  const [defaultValue, setDefaultValue] = useState(0);

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>
        Slider with default color of Thumb:
      </Text>
      <Slider
        style={styles.thumbSlider}
        thumbImage={require("../icon/bright1.png")}
        thumbTintColor={"black"}
        minimumValue={0}
        maximumValue={1}
        thumbTouchSize={{ width: 200, height: 200 }}
        value={0.65}
        onValueChange={(value) => setDefaultValue(value)}
        minimumTrackTintColor={"white"}
        maximumTrackTintColor={"white"}
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
  thumbSlider: {
    width: "100%",
    height: 150,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
  },
});
