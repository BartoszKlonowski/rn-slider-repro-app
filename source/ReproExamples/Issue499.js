import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue499() {
  const [correctValue, setCorrectValue] = useState(150);
  const [incorrectValue, setIncorrectValue] = useState(450);
  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>
        Two sliders with the same range: 100 - 500
      </Text>
      <Text style={styles.sliderIntroText}>
        Slider with intial value = 150 {correctValue}
      </Text>
      <Slider
        minimumValue={100}
        maximumValue={500}
        step={1}
        value={correctValue}
        onValueChange={(val) => setCorrectValue(val)}
        maximumTrackTintColor="#FF0000"
        minimumTrackTintColor="#00FF00"
      />
      <Text style={styles.sliderIntroText}>
        Slider with initial value = 450 {incorrectValue}
      </Text>
      <Slider
        minimumValue={100}
        maximumValue={500}
        step={1}
        value={incorrectValue}
        onValueChange={(val) => setIncorrectValue(val)}
        maximumTrackTintColor="#FF0000"
        minimumTrackTintColor="#00FF00"
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
