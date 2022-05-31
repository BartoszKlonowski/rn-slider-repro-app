import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function data(issueNumber) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(
        `https://api.github.com/repos/callstack/react-native-slider/issues/${issueNumber}`
      ).then((response) => response.json())
      .then(data => {
        console.log(`${JSON.stringify(issueNumber)} || resolving`);
        resolve({
          resultData: data
        });
      });
    }, 1000);
  });
}

function fetchData(issueNumber) {
  let resultData;
  let status = "loading";

  let fetching = data(issueNumber).then(
    result => {
      console.log(`${JSON.stringify(issueNumber)} || Data fetched correctly: ${result}`);
      status = "loaded";
      console.log(`${JSON.stringify(issueNumber)} || and status is: ${status}`);
      resultData = result;
    }
  );

  return {
    read() {
      console.log(`${JSON.stringify(issueNumber)} || status is: ${status}`);
      if(status === "loading") {
        console.log(`${JSON.stringify(issueNumber)} || throwing fetcher`);
        throw fetching;
      } else {
        console.log(`${JSON.stringify(issueNumber)} || returning data: ${resultData}`);
        return resultData;
      }
    }
  }
}

export default Issue = (issueNumber, navigation) => {
  console.log("starting issueNumber: ", issueNumber);
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
