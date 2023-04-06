import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { View, Text } from "react-native";

export const Issue503 = () => {
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Slider Value: {sliderValue}</Text>
      <Slider
        style={{ width: "80%", height: 40 }}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
        thumbTintColor="#FF0000"
        step={1}
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
      />
    </View>
  );
};
