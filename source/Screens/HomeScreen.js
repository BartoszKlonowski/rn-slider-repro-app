import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { QueryClient, QueryClientProvider } from "react-query";
import screens from "../ReproExamples/Issues";
import { ReproWidget } from "../ReproWidget";

const queryClient = new QueryClient();

export function HomeScreen({ navigation }) {
  const [openOnly, setOpenOnly] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.mainLayout}>
        <Text style={styles.mainIntroText}>
          Select an issue to see the repro example:
        </Text>
        <View style={styles.mainIntroText}>
          <Text>Filters:</Text>
          <Text
            onPress={() => {
              setOpenOnly(!openOnly);
            }}
            style={openOnly ? styles.filterSelected : styles.filterUnselected}
          >
            Open only!
          </Text>
        </View>
        <ScrollView>
          {screens.map((issue) => (
            <ReproWidget
              navigation={navigation}
              issueNumber={issue.name}
              openOnly={openOnly}
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
    backgroundColor: "white",
  },
  mainIntroText: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  filterSelected: {
    color: "#020202",
  },
  filterUnselected: {
    color: "#ABABAB77",
  },
});
