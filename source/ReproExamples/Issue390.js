import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Issue390() {
	const [value, setValue] = useState(0);

  const onChange = (value) => {
    setValue(value);
    console.log("onChange.value: ", value);
  };

  return (
    <View style={styles.mainLayout}>
      <Slider
        onValueChange={onChange}
        minimumValue={0}
        maximumValue={100}
        value={value}
        step={20}
      />
      <Text>Current value: {value}</Text>
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
