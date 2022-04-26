import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "react-query";
import screens from "../ReproExamples/Issues";
import { ReproWidget } from "../ReproWidget";

const queryClient = new QueryClient();

export function HomeScreen({ navigation }) {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.mainLayout}>
        <Text style={styles.mainIntroText}>
          Select an issue to see the repro example:
        </Text>
        <ScrollView>
          {screens.map((issue) => (
            <ReproWidget
              navigation={navigation}
              issueNumber={issue.name}
              key={issue.name}
            />
          ))}
        </ScrollView>
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
  mainIntroText: {
    margin: 20,
  },
});
