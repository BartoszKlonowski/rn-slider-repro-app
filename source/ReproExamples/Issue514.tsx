import { View, StyleSheet, Text, Image, ImageURISource } from "react-native";
import React, { Fragment } from "react";

import Slider, { SliderProps } from "@react-native-community/slider";
import { useState } from "react";

interface TrackMarksProps {
  isTrue: boolean;
  image?: boolean;
  thumbImage?: ImageURISource;
}

interface CustomSliderProps extends SliderProps {
  image?: ImageURISource;
}

const CustomizedSlider = (props: CustomSliderProps) => {
  const [currentValue, setCurrentValue] = useState(
    props.value ?? props.minimumValue
  );
  const [width, setWidth] = useState(0);
  const options = Array.from(
    { length: (props.maximumValue - props.minimumValue) / props.step + 1 },
    (_, index) => index
  );

  return (
    <View
      onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width);
      }}
      style={[{ zIndex: 1, width: "100%", height: "100%" }, props.style]}
    >
      <Slider
        {...props}
        onValueChange={(value) => {
          setCurrentValue(value);
          if (props.onValueChange) {
            props.onValueChange(value);
          }
        }}
        style={{ zIndex: 1, width: width }}
        thumbTintColor={props.thumbImage ? "transparent" : props.thumbTintColor}
        // eslint-disable-next-line
        thumbImage={undefined}
      />
      <View
        pointerEvents="none"
        style={{
          width: width - options.length,
          flexDirection: "row",
          top: -25,
          zIndex: 2,
        }}
      >
        {options.map((i, index) => {
          return (
            <Fragment key={index}>
              <View
                style={{ alignItems: "center", width: width / options.length }}
              >
                <SliderTrackMark
                  key={`${index}-SliderTrackMark`}
                  isTrue={currentValue === i}
                  image={currentValue === i}
                  thumbImage={props.thumbImage}
                />
                <Paragraph i={i} key={`${index}-Paragraph`} />
              </View>
            </Fragment>
          );
        })}
      </View>
    </View>
  );
};

export const Issue514 = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomizedSlider
        minimumValue={0}
        maximumValue={10}
        step={1}
        tapToSeek
        minimumTrackTintColor={"#11FF11"}
        maximumTrackTintColor={"#11FF11"}
      />
    </View>
  );
};

function SliderTrackMark({ isTrue, image, thumbImage }: TrackMarksProps) {
  return isTrue ? (
    <View style={image ? styles.outerTrue : styles.outerImage}>
      {image ? (
        <Image source={thumbImage} accessibilityIgnoresInvertColors />
      ) : (
        <View style={styles.innerTrue} />
      )}
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
  outerImage: {
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
