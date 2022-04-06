import React from "react";
import { View, Text, Button } from "react-native";

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
      <View>
        <Button
          title="press"
          onPress={() => {
            this.state.navigation.navigate(
              String(this.state.issueReproExample),
              { issue: this.state.issueReproExample }
            );
          }}
        />
        <Text>Navigate to: {this.state.issueReproExample}</Text>
      </View>
    );
  }
}
