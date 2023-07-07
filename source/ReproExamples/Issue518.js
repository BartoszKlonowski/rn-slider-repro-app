import React, { useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue518() {
  const [isDisplayed, setDisplayed] = useState(true);
  const [value, setValue] = useState(0);

  return (
    <View style={styles.mainLayout}>
      <Text>
        This is the placeholder text, and the button to hide/show the Slider
      </Text>
      <Button
        onPress={() => {
          setDisplayed(!isDisplayed);
        }}
        title="Toggle visibility!"
      />
      <View style={styles.slider}>
        {isDisplayed ? (
          <Slider
            maximumValue={10}
            minimumValue={0}
            step={1}
            maximumTrackTintColor="#ABCDEF"
            minimumTrackTintColor="#FEDCAB"
            value={value}
            onValueChange={(val) => {
              setValue(val);
            }}
          />
        ) : null}
      </View>
      <Text>
        Above is the space where Slider should be displayed if toggled.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  slider: {
    height: 100,
  },
});
