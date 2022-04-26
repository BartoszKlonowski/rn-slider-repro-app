import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue345() {
  const [priceInNis, setPriceInNis] = useState(0);
  return (
    <View style={styles.mainLayout}>
      <Slider
        style={styles.slider}
        step={1}
        minimumValue={0}
        maximumValue={10000}
        value={priceInNis}
        onValueChange={(slideValue) => setPriceInNis(parseInt(slideValue))}
        minimumTrackTintColor="#0074D9"
        maximumTrackTintColor="grey"
        thumbTintColor="#0074D9"
      />
      <Text style={styles.showMoney}>{priceInNis} ILS</Text>
      <View style={styles.label}>
        <TextInput
          accessibilityLabel="Text input field"
          accessibilityHint="TextInput"
          keyboardType="number-pad"
          numeric
          style={styles.showMoney}
          placeholder="Enter Price"
          underlineColorAndroid="transparent"
          onChangeText={(newSliderValue) => {
            priceInNis === null
              ? setPriceInNis(0)
              : setPriceInNis(parseInt(newSliderValue));
          }}
          value={priceInNis}
          maxLength={10} //setting limit of input
        />
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
  slider: {},
  showMoney: {},
  label: {},
});
