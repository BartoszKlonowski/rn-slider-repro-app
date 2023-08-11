import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue500() {
  const [value, setValue] = useState(50);
  const [step, setStep] = useState(1);

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>Slider with default direction:</Text>
      <Slider value={value} step={step} minimumValue={0} maximumValue={1000} />
      <Text>Value: {value}</Text>

      <Button
        title={`Change step to: ${step + 1}`}
        onPress={() => {
          setStep(step + 1);
        }}
      />
      <Button
        title={`Change value to: ${value * 2}`}
        onPress={() => {
          setValue(value * 2);
        }}
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
