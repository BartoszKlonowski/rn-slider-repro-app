import React from "react";
import { View, StyleSheet } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function DetailsScreen({ navigation }) {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.mainLayout}>
        <View style={styles.header}></View>
        <View style={styles.reproExample}></View>
        <View style={styles.footer}></View>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  header: {
    margin: 20,
  },
  footer: {
    margin: 20,
  },
  reproExample: {
    margin: 20,
  },
});
