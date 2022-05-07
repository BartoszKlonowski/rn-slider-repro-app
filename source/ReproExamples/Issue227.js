import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue227() {
  const [defaultValue, setDefaultValue] = useState(0);
  const [touchableAreaWidth, setTouchableAreaWidth] = useState(100);
  const [touchableAreaHeight, setTouchableAreaHeight] = useState(100);

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>
        Slider with Thumb being an Image:
      </Text>
      <Slider
        style={styles.thumbSlider}
        thumbTintColor={"white"}
        thumbImage={require("./../ReproAssets/Issue346_ThumbImage.png")}
        minimumValue={0}
        maximumValue={1}
        thumbTouchSize={{
          width: touchableAreaWidth,
          height: touchableAreaHeight,
        }}
        value={0.65}
        onValueChange={(value) => setDefaultValue(value)}
        minimumTrackTintColor={"green"}
        maximumTrackTintColor={"yellow"}
      />
      <Text>Value: {defaultValue}</Text>
      <View style={styles.touchableInfo}>
        <Text>Touchable size (1 - 200):</Text>
        <Slider
          minimumValue={1}
          maximumValue={200}
          step={1}
          onValueChange={(value) => setTouchableAreaHeight(value)}
        />
        <Text>Height: {touchableAreaHeight}</Text>
        <Slider
          minimumValue={1}
          maximumValue={200}
          step={1}
          onValueChange={(value) => setTouchableAreaWidth(value)}
        />
        <Text>Width: {touchableAreaWidth}</Text>
      </View>
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
  touchableInfo: {
    margin: 30,
    alignContent: "center",
    justifyContent: "space-around",
  },
});
