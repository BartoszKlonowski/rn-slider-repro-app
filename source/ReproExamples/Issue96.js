import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue96() {

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>Slider with default color of Thumb:</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={0}
      />
      <Text style={styles.sliderIntroText}>Slider with custom color of Thumb:</Text>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={0}
        thumbTintColor={"orange"}
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
  }
});
