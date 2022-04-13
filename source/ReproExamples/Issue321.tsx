import React, { ReactNode, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider, { SliderProps } from "@react-native-community/slider";

type Props = {
  label: ReactNode;
  prefix?: ReactNode;
  unit?: string;
} & SliderProps;

function InputSlider({
  label,
  prefix,
  minimumValue = 0,
  maximumValue,
  value,
  unit,
  ...rest
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        {prefix && <Text style={styles.labelPrefix}>{prefix}</Text>}
        <View>
          {label && <Text style={styles.label}>{label}</Text>}
          <Text style={styles.value}>
            {value} {unit}
          </Text>
        </View>
      </View>
      <Slider
        {...rest}
        value={value}
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        minimumTrackTintColor={"Blue"}
        thumbTintColor="white"
      />
    </View>
  );
}

export function Issue321() {
  const [value, setValue] = useState(0);
  return (
    <InputSlider
      label="title"
      prefix={"<IconDollar />"}
      maximumValue={15000}
      value={value}
      onValueChange={(val) => setValue(val)}
      unit="$"
      step={1000}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {},
  labelPrefix: {},
  label: {},
  value: {},
  slider: {},
});
