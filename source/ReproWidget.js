import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useQuery } from "react-query";
import Loading from "./Components/Loading";

export const ReproWidget = ({ navigation, issueNumber }) => {
  const { isLoading, data } = useQuery(issueNumber, () =>
    fetch(
      `https://api.github.com/repos/callstack/react-native-slider/issues/${issueNumber}`
    ).then((res) => res.json())
  );
  const [isAnimating, setIsAnimating] = useState(true);
  const loadingAnimationDurationMs = 1000;

  if (isLoading || isAnimating) {
    setTimeout(() => {
      setIsAnimating(false);
    }, loadingAnimationDurationMs);
    return <Loading duration={loadingAnimationDurationMs} number={issueNumber}/>;
  }

  const getLabelFromData = () => {
    const platformLabelKeyword = "platform:";
    const label = data.labels.find((label) => {
      return label.name.includes(platformLabelKeyword);
    });
    if (label) {
      return label.name.substring(platformLabelKeyword.length);
    } else {
      return "unknown";
    }
  };

  const platform = getLabelFromData();

  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={[
        styles.reproWidget,
        { borderLeftColor: data.state === "closed" ? "#8250DF" : "#1A7F37" },
      ]}
      onPress={() => {
        navigation.navigate("Details", {
          issue: issueNumber,
          title: data.title,
          url: data.html_url,
          platform: platform,
          dateCreated: data.created_at,
        });
      }}
    >
      <View>
        <Text style={styles.issueHeader}>
          {issueNumber}: {data.title}
        </Text>
        <Text style={styles.issueBrief}>Platform: {platform}</Text>
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
    width: "90%"
  },
  issueHeader: {
    fontWeight: "bold",
    margin: 5,
  },
  issueBrief: {
    margin: 5,
  },
});
