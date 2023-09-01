import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageURISource,
  Platform,
} from "react-native";
import React, { FC, Fragment } from "react";

import Slider, { SliderProps } from "@react-native-community/slider";
import { useState } from "react";

interface TrackMarksProps {
  isTrue: boolean;
  thumbImage?: ImageURISource;
  StepMarker?: FC<MarkerProps> | boolean;
}

interface MarkerProps {
  stepMarked: boolean;
}

interface CustomSliderProps extends SliderProps {
  image?: ImageURISource;
  stepMarker?: FC<MarkerProps> | boolean;
  renderStepNumber?: boolean;
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
      style={[{ zIndex: 1, width: "100%" }, props.style]}
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
        thumbTintColor={
          props.thumbImage && !!props.stepMarker
            ? "transparent"
            : props.thumbTintColor
        }
        // eslint-disable-next-line
        thumbImage={props.stepMarker ? undefined : props.thumbImage}
      />
      {props.stepMarker || !!props.renderStepNumber ? (
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
                  style={{
                    alignItems: "center",
                    width: width / options.length,
                  }}
                >
                  <SliderTrackMark
                    key={`${index}-SliderTrackMark`}
                    isTrue={currentValue === i}
                    thumbImage={props.thumbImage}
                    StepMarker={props.stepMarker}
                  />
                  {props.renderStepNumber ? (
                    <Paragraph i={i} key={`${index}-Paragraph`} />
                  ) : null}
                </View>
              </Fragment>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export const Issue514 = () => {
  // eslint-disable-next-line
  const image = require("../ReproAssets/Issue346_ThumbImage.png");
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ marginTop: 20 }}>Slider just like before</Text>
      <CustomizedSlider
        minimumValue={0}
        maximumValue={10}
        step={1}
        tapToSeek
        minimumTrackTintColor={"#11FF11"}
        maximumTrackTintColor={"#11FF11"}
      />
      <Text style={{ marginTop: 20 }}>
        Slider just like before, but with image
      </Text>
      <CustomizedSlider
        minimumValue={0}
        maximumValue={10}
        step={1}
        // eslint-disable-next-line
        thumbImage={image}
        tapToSeek
        minimumTrackTintColor={"#11FF11"}
        maximumTrackTintColor={"#11FF11"}
      />
      <Text style={{ marginTop: 20 }}>
        Slider with default steps indicator and numbers
      </Text>
      <CustomizedSlider
        minimumValue={0}
        maximumValue={10}
        step={1}
        tapToSeek
        stepMarker
        renderStepNumber
        minimumTrackTintColor={"#123456"}
        maximumTrackTintColor={"#123456"}
      />
      <Text style={{ marginTop: 20 }}>
        Slider with customized indicator and no numbers
      </Text>
      <CustomizedSlider
        minimumValue={0}
        maximumValue={10}
        step={1}
        tapToSeek
        stepMarker={(isMarked) => {
          return isMarked ? (
            <View style={styles.outerTrue}>
              <View style={styles.innerTrue} />
            </View>
          ) : (
            <View style={styles.outer}>
              <View style={styles.inner} />
            </View>
          );
        }}
        minimumTrackTintColor={"#654321"}
        maximumTrackTintColor={"#654321"}
      />
      <Text style={{ marginTop: 20 }}>
        Slider with image as a thumb and no numbers
      </Text>
      <CustomizedSlider
        minimumValue={0}
        maximumValue={10}
        step={1}
        tapToSeek
        stepMarker
        // eslint-disable-next-line
        thumbImage={image}
        minimumTrackTintColor={"#654321"}
        maximumTrackTintColor={"#654321"}
      />
    </View>
  );
};

function SliderTrackMark({ isTrue, thumbImage, StepMarker }: TrackMarksProps) {
  if (typeof StepMarker !== "boolean") {
    return <StepMarker stepMarked={isTrue} />;
  }
  return isTrue ? (
    <>
      {thumbImage ? (
        <View style={styles.outerTrue}>
          <Image source={thumbImage} accessibilityIgnoresInvertColors />
        </View>
      ) : (
        <View style={styles.innerTrue} />
      )}
    </>
  ) : (
    <View style={styles.inner} />
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
