import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import Slider from "@react-native-community/slider";

const Issue496 = () => {
  let sliderRef = useRef();
  const [lowAlarm, setLowAlarm] = useState(0);

  const onValueChange = (value) => {
    if (value == "+") {
      if (lowAlarm < 100) {
        setLowAlarm(Math.round(lowAlarm + 1, 2));
      }
    } else if (value == "-") {
      if (lowAlarm > 0) {
        setLowAlarm(Math.round(lowAlarm - 1, 2));
      }
    } else {
      setLowAlarm(Math.round(value, 2));
    }
  };

  return (
    <View style={styles.textCon}>
      <TouchableOpacity
        accessibilityRole="button"
        style={styles.minMaxLabel}
        onPress={() => {
          onValueChange("-");
        }}
      >
        <Text>{"-"}</Text>
      </TouchableOpacity>
      <View style={styles.sliderLayout}>
        <View style={styles.minLabel}>
          <Text style={{ color: "black" }}>{0}</Text>
        </View>
        <View style={styles.maxLabel}>
          <Text style={{ color: "black" }}>{100}</Text>
        </View>
        <Slider
          ref={sliderRef}
          style={styles.alarmSlider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          onValueChange={onValueChange}
          value={lowAlarm}
          minimumTrackTintColor={"green"}
          maximumTrackTintColor={"brown"}
          thumbTintColor={"black"}
        />
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        style={styles.minMaxLabel}
        onPress={() => {
          onValueChange("+");
        }}
      >
        <Text>{"+"}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Issue496;

const styles = StyleSheet.create({
  alarmSlider: {
    width: 250,
    height: 50,
  },
  sliderLayout: {
    height: Platform.OS == "ios" ? 70 : 50,
    alignItems: "center",
    justifyContent: "center",
  },
  minLabel: {
    position: "absolute",
    top: 0,
    left: 10,
  },
  maxLabel: {
    position: "absolute",
    top: 0,
    right: 10,
  },

  minMaxLabel: {
    borderRadius: 25,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "Blue",
  },

  textCon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
