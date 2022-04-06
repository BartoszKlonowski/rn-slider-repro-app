import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useQuery } from "react-query";

export const ReproWidget = ({ navigation, issueNumber }) => {
  const { isLoading, data } = useQuery(issueNumber, () =>
    fetch(
      `https://api.github.com/repos/callstack/react-native-slider/issues/${issueNumber}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return (
      <View style={styles.reproWidget}>
        <Text>Still loading the data...</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={[
        styles.reproWidget,
        { borderLeftColor: data.state === "closed" ? "#8250DF" : "#1A7F37" },
      ]}
      onPress={() => {
        navigation.navigate(String(issueNumber), { issue: issueNumber });
      }}
    >
      <View>
        <Text style={styles.issueHeader}>{issueNumber}</Text>
        <Text style={styles.issueBrief}>Brief info about the issue</Text>
      </View>
    </TouchableOpacity>
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
  issueHeader: {
    fontWeight: "bold",
    margin: 5,
  },
  issueBrief: {
    margin: 5,
  },
});
