import { View, StyleSheet, Text } from "react-native";
import React, { Fragment } from "react";

import Slider from "@react-native-community/slider";
import { useState } from "react";

interface TrackMarksProps {
  isTrue: boolean;
}

export const Issue514 = () => {
  const [value, setValue] = useState(0);
  const options = Array.from({ length: 7 / 1 + 1 }, (_, index) => index * 1);
  return (
    <View>
      <Slider
        minimumValue={0}
        maximumValue={7}
        step={1}
        tapToSeek
        onValueChange={setValue}
        minimumTrackTintColor={"#11FF11"}
        maximumTrackTintColor={"#11FF11"}
        style={{ zIndex: 1 }}
        // eslint-disable-next-line
        thumbImage={require("../ReproAssets/Issue346_ThumbImage.png")}
      />
      <View
        pointerEvents="none"
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          top: -25,
          zIndex: 2,
        }}
      >
        {options.map((i, index) => {
          return (
            <Fragment key={index}>
              <View style={{ alignItems: "center" }}>
                <SliderTrackMark key={`${index}-SliderTrackMark`} isTrue={value === i} />
                <Paragraph i={i} key={`${index}-Paragraph`} />
              </View>
            </Fragment>
          );
        })}
      </View>
    </View>
  );
};

function SliderTrackMark({ isTrue }: TrackMarksProps) {
  return isTrue ? (
    <View style={styles.outerTrue}>
      <View style={styles.innerTrue} />
    </View>
  ) : (
    <View style={styles.outer}>
      <View style={styles.inner} />
    </View>
  );
}

function Paragraph({ i }: { i: number }) {
  return (
    <View style={{ marginTop: 20, alignItems: "center" }}>
      <Text>{i}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#11FF11",
    justifyContent: "center",
    alignItems: "center",
  },
  outerTrue: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#0F0FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: "#111111",
  },
  innerTrue: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: "#0F0FFF",
  },
});
