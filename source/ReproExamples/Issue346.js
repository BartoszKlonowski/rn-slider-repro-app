import React, { useState } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue346() {
  const [defaultValue, setDefaultValue] = useState(0);

  const Img = () => (
    <Image
      source={require("./../ReproAssets/Issue346_ThumbImage.png")}
      accessibilityIgnoresInvertColors={false}
    />
  );
  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>
        Slider with Thumb being an Image:
      </Text>
      <Img />
      <Slider
        style={styles.thumbSlider}
        thumbTintColor={"white"}
        thumbImage={require("./../ReproAssets/Issue346_ThumbImage.png")}
        minimumValue={0}
        maximumValue={1}
        thumbTouchSize={{ width: 100, height: 100 }}
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
