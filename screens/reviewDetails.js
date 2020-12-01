import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { globalStyles } from "../styles/globalStyles";

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 28,
  },
});

export default ReviewDetails;
