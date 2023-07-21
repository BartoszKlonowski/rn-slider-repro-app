import React, { useEffect, useState } from "react";

import { SafeAreaView, Text, View, ActivityIndicator } from "react-native";
import Slider from "@react-native-community/slider";

const roundToDecimals = (value) => {
  return Math.round(value);
};

const updateAsyncStorage = (value) => {
  console.log(value);
};

export default function Issue527() {
  const [fontSize, setFontSize] = useState(1);
  const [updatingFontSize, setUpdatingFontSize] = useState(false);

  // the font size change behaviour
  useEffect(() => {
    if (updatingFontSize) {
      setUpdatingFontSize(false);
      updateAsyncStorage(fontSize);
    }
  }, [updatingFontSize]);

  return (
    <SafeAreaView style={{ flex: 1, margin: 10 }}>
      <Text
        style={{
          paddingVertical: 10,
          fontWeight: "bold",
          fontSize: 18,
          color: "black",
        }}
      >
        {"Font Size:"}
      </Text>

      {/* TODO: android spacing issue: https://github.com/callstack/react-native-slider/issues/98 */}
      <Slider
        //style={{marginHorizontal: (Platform.OS == 'ios') ? 0 : -15}} // TODO: other Platform.OS ?
        disabled={updatingFontSize}
        minimumValue={0.8}
        maximumValue={1.2}
        step={0.05}
        value={fontSize}
        onValueChange={(value) => {
          setFontSize(roundToDecimals(value, 2));
        }}
        onSlidingComplete={(value) => {
          setFontSize(roundToDecimals(value, 2));
          setUpdatingFontSize(true);
        }}
        tapToSeek={true}
        thumbTintColor={"grey"}
        minimumTrackTintColor={"blue"}
        maximumTrackTintColor={"grey"}
      />

      <View
        style={{
          //marginHorizontal: (Platform.OS == 'ios') ? 0 : 15,
          paddingVertical: 10,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            flex: 1,
            textAlign: "left",
            fontSize: 18,
            color: "black",
          }}
        >
          {"Smaller"}
        </Text>

        {updatingFontSize ? (
          <ActivityIndicator color={"grey"} />
        ) : (
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 18,
              color: "black",
            }}
          >
            {fontSize == 1 ? "System" : fontSize}
          </Text>
        )}

        <Text
          style={{
            flex: 1,
            textAlign: "right",
            fontSize: 18,
            color: "black",
          }}
        >
          {"Larger"}
        </Text>
      </View>
    </SafeAreaView>
  );
}
