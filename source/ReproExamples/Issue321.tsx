import React, { ReactNode } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Slider, { SliderProps } from '@react-native-community/slider';

type Props = { label: ReactNode; prefix?: ReactNode; unit?: string } & SliderProps;

export function Issue321({
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

const styles = StyleSheet.create({
  container: {
  },
  title: {},
  labelPrefix: {},
  label: {},
  value: {},
  slider: {}
})
