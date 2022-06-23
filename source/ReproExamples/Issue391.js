import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue391() {
  const [start, setStart] = useState(false);
  const [volume, setVolume] = useState(0);

  const onChangeVolume = (item, volume) => {
    console.log("onChangeVolume with: ", item, volume);
    setVolume(volume);
  };

  const item = "The volume is: ";

  return (
    <View style={styles.mainLayout}>
      <Text style={styles.sliderIntroText}>
        Slider with Thumb being an Image:
      </Text>
      <Slider
        disabled={!start}
        style={{ width: 150, height: 20 }}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={(volume) => onChangeVolume(item, volume)}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#586894"
      />
      <Text>This button turns the slider on:</Text>
      <Button title={"Start"} onPress={() => setStart(true)} />
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
