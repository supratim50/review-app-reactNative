import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalStyles } from "../styles/globalStyles";

const About = () => {
  return (
    <View style={globalStyles.container}>
      <Text>About Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 28,
  },
});

export default About;
