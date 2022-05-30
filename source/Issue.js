import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function fetchData(issueNumber) {
  let resultData;
  let status = "loading";
  let promise = fetch(
    `https://api.github.com/repos/callstack/react-native-slider/issues/${issueNumber}`
  ).then((response) => response.json());
  let fetching = promise
  .then(data => {
    resultData = data;
    status = "loaded"
  });

  return {
    read() {
      if(status === "loading") {
        throw fetching;
      } else {
        return resultData;
      }
    }
  }
}

export default Issue = (issueNumber, navigation) => {
  const data = fetchData(issueNumber).read();

  getLabelFromData = () => {
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

  return(
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
}


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
