import React, { Suspense } from "react";
import { View, Text, StyleSheet } from "react-native";
import Issue from "./Issue";

class Spinner extends React.Component {
  render() {
    return (
      <View style={styles.reproWidget}>
        <Text>Still loading the data...</Text>
      </View>
    );
  }
}

export const ReproWidget = ({ navigation, issueNumber }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Issue issueNumber={issueNumber} navigation={navigation} />
    </Suspense>
  );
};

const styles = StyleSheet.create({
  reproWidget: {
    margin: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 10,
    borderLeftColor: "blue",
  },
});
