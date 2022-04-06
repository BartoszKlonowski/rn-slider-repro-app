import React from "react";
import { View, Text } from "react-native";
import { QueryClient, QueryClientProvider } from "react-query";
import screens from "../ReproExamples/Issues";
import { ReproWidget } from "../ReproWidget";

const queryClient = new QueryClient();

export function HomeScreen({ navigation }) {
  return (
    <QueryClientProvider client={queryClient}>
      <View
        style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}
      >
        <Text style={{ margin: 20 }}>
          Select an issue to see the repro example:
        </Text>
        {screens.map((issue) => (
          <ReproWidget
            navigation={navigation}
            issueNumber={issue.name}
            key={issue.name}
          />
        ))}
      </View>
    </QueryClientProvider>
  );
}
