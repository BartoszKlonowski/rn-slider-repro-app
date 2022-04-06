import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export class ReproWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: props.navigation,
      issueReproExample: props.issueReproExample,
    };
  }

  render() {
    return (
      <TouchableOpacity style={styles.reproWidget} onPress={() => {
        this.state.navigation.navigate(
          String(this.state.issueReproExample),
          { issue: this.state.issueReproExample }
        );
      }}>
      <View>
        <Text>Navigate to: {this.state.issueReproExample}</Text>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  reproWidget: {
  }
})
