import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function data(issueNumber) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(
        `https://api.github.com/repos/callstack/react-native-slider/issues/${issueNumber}`
      )
        .then((response) => response.json())
        .then((data) => {
          resolve({
            resultData: data,
          });
          return data;
        })
        .catch((error) => error.message);
    }, 1000);
  });
}

function fetchData(issueNumber) {
  let resultData;
  let status = "loading";

  let fetching = data(issueNumber)
    .then((result) => {
      status = "loaded";
      resultData = result;
      return result;
    })
    .catch((error) => error.message);

  return {
    read() {
      if (status === "loading") {
        throw fetching;
      } else {
        return resultData;
      }
    },
  };
}

const Issue = (issueNumber, navigation) => {
  const data = fetchData(issueNumber).read();

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
          platform: getLabelFromData(),
          dateCreated: data.created_at,
        });
      }}
    >
      <View>
        <Text style={styles.issueHeader}>
          {issueNumber}: {data.title}
        </Text>
        <Text style={styles.issueBrief}>Platform: {getLabelFromData()}</Text>
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

export default Issue;
