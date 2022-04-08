import React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import screens from "../ReproExamples/Issues";

const queryClient = new QueryClient();

export function DetailsScreen({ route }) {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.mainLayout}>
        <View style={styles.header}>
          <Text style={styles.titleText}>{route.params.title}</Text>
          <Text style={styles.headerText}>Issue: {route.params.issue}</Text>
          <Text style={styles.headerText}>
            Platform: {route.params.platform}
          </Text>
          <Text style={styles.headerText}>
            Created: {new Date(route.params.dateCreated).toDateString()}
          </Text>
        </View>
        <View style={styles.reproExample}>
          {screens
            .find((issue) => issue.name === route.params.issue)
            .component()}
        </View>
        <View style={styles.footer}>
          <Text
            style={styles.issueLinkText}
            onPress={() => Linking.openURL(route.params.url)}
          >
            Go to issue
          </Text>
        </View>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
  },
  header: {
    justifyContent: "space-around",
    margin: 20,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "black",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "800",
    fontFamily: "Roboto",
    color: "black",
    alignSelf: "center",
  },
  footer: {
    margin: 20,
    alignItems: "center",
    borderTopWidth: 1,
  },
  reproExample: {
    height: "60%",
    margin: 20,
  },
  issueLinkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
