import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue512() {
  return (
    <View style={styles.mainLayout}>
      <Slider
        style={styles.slider}
        step={1}
        tapToSeek
        minimumValue={0}
        maximumValue={1000}
        minimumTrackTintColor="#0074D9"
        maximumTrackTintColor="grey"
        thumbTintColor="#0074D9"
        lowerLimit={150}
        upperLimit={850}
      >
        <Text>This text is inside Slider component</Text>
      </Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  slider: {},
});
