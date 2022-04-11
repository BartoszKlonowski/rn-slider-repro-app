import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Slider from "@react-native-community/slider";

export function Issue250() {
  const [locationMaxWaitTime, setLocationMaxWaitTime] = useState(0 | null);

  const handleAccessibleChangeMaxWaitTime = increment => {
    const times = [5, 15, 30, 45, null];
    let index = times.indexOf(maxWaitTime);
    if (index === -1) index = 4;
    if (increment) {
      if (index === times.length - 1 || !maxWaitTime) return;
    setLocationMaxWaitTime(times[index + 1]);
    console.log("locationMaxWaitTime: ", locationMaxWaitTime);
    } else {
    if (index === 0) return;
    setLocationMaxWaitTime(times[index - 1]);
    console.log("locationMaxWaitTime: ", locationMaxWaitTime);
    }
    };
  return (
    <View style={styles.mainLayout}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={0}
        accessibilityActions={[
          { name: 'increment' },
          { name: 'decrement' },
        ]}
        onAccessibilityAction={event => {
          switch (event.nativeEvent.actionName) {
            case 'increment':
              handleAccessibleChangeMaxWaitTime(true);
              break;
            case 'decrement':
              handleAccessibleChangeMaxWaitTime(false);
              break;
            default:
              break;
          }
        }}
      />
      <Text>locationMaxWaitTime: {locationMaxWaitTime}</Text>
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
