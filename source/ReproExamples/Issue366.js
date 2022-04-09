import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from '@react-native-community/slider';

export function Issue366() {
  const [changedCount, setChangedCount] = useState(0);

  const onChange = (value) => {
    setChangedCount(changedCount + 1);
    console.log("onChange.value: ", value);
  }

  return (
    <View style={styles.mainLayout}>
      <Slider
        onValueChange={onChange}
        minimumValue={0}
        maximumValue={100}
        value={0}
      />
      <Text>onChanged called times: {changedCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
