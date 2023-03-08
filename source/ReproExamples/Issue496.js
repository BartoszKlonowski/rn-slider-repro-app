import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import Slider from "@react-native-community/slider";

const Issue496 = () => {
  const initialValue = 50;
  const maxValue = 100;
  const minValue = 0;
  const step = 1;

  const [lowAlarm, setLowAlarm] = useState(initialValue);

  const onProgrammaticValueChange = (change) => {
    if (change == "+") {
      if (lowAlarm < maxValue) {
        setLowAlarm(Math.round(lowAlarm + step, 2));
      }
    } else if (change == "-") {
      if (lowAlarm > minValue) {
        setLowAlarm(Math.round(lowAlarm - step, 2));
      }
    }
  };

  const onManualValueChange = (currentValue) => {
    setLowAlarm(currentValue);
  };

  return (
    <AlarmRangeSelector
      onProgrammaticValueChange={onProgrammaticValueChange}
      onManualValueChange={onManualValueChange}
      setLowAlarm={setLowAlarm}
      minValue={0}
      maxValue={100}
      step={1}
      value={lowAlarm}
    />
  );
};

const AlarmRangeSelector = (props) => {
  const {
    minValue,
    maxValue,
    step,
    onProgrammaticValueChange,
    onManualValueChange,
    value,
    setLowAlarm,
  } = props;

  return (
    <View style={styles.textCon}>
      <TouchableOpacity
        accessibilityRole="button"
        style={styles.minMaxLabel}
        onPress={() => {
          onProgrammaticValueChange("-");
        }}
      >
        <Text>{"-"}</Text>
      </TouchableOpacity>
      <View style={styles.sliderLayout}>
        <View style={styles.minLabel}>
          <Text style={{ color: "black" }}>{minValue}</Text>
        </View>
        <View style={styles.maxLabel}>
          <Text style={{ color: "black" }}>{maxValue}</Text>
        </View>
        <Slider
          style={styles.alarmSlider}
          minimumValue={minValue}
          maximumValue={maxValue}
          onSlidingComplete={(slidingValue) => setLowAlarm(slidingValue)}
          onValueChange={(val) => onManualValueChange(val)}
          step={step}
          value={value}
          minimumTrackTintColor={"green"}
          maximumTrackTintColor={"brown"}
          thumbTintColor={"black"}
        />
        <Text>{value}</Text>
      </View>
      <TouchableOpacity
        accessibilityRole="button"
        style={styles.minMaxLabel}
        onPress={() => {
          onProgrammaticValueChange("+");
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
