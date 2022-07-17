import React from "react";
import { Animated, View, StyleSheet, Text } from "react-native";

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotationDegree: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.rotationDegree, {
      toValue: 360,
      duration: this.props.duration,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const rotation = this.state.rotationDegree.interpolate({
      inputRange: [0, 360],
      outputRange: ["0deg", "360deg"],
    });

    return (
      <View style={styles.container}>
        <View style={styles.reproWidget}>
          <Animated.View
            style={[
              styles.indicator,
              {
                transform: [{ rotate: rotation }],
              },
            ]}
            useNativeDriver={true}
          >
            <View
              style={[
                styles.pointer,
                {
                  transform: [
                    { rotate: `${this.props.number}deg` },
                    { translateY: 5 },
                  ],
                },
              ]}
            />
          </Animated.View>
          <Text style={styles.loadingText}>Still loading...</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  reproWidget: {
    flex: 1,
    flexDirection: "row",
    margin: 20,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 10,
    borderLeftColor: "blue",
    width: "90%",
  },
  indicator: {
    height: 30,
    width: 30,
    margin: 10,
    borderColor: "gray",
    borderWidth: 5,
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  pointer: {
    height: 30,
    width: 1,
    alignSelf: "center",
    borderColor: "white",
    borderWidth: 2,
  },
  loadingText: {
    fontSize: 14,
  },
});

export default Loading;
