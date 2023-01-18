import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue84() {
  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>
        Slider with same tint colors:
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={50}
        maximumTrackTintColor="#FF0000"
        minimumTrackTintColor="#FF0000"
      />
      <Text style={styles.sliderIntroText}>
        Slider with different tint colors:
      </Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={50}
        maximumTrackTintColor="#FEDCBA"
        minimumTrackTintColor="#012345"
      />
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
