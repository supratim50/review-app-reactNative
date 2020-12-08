import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import { globalStyles } from "../styles/globalStyles";
import Card from "../components/Card";

const ReviewDetails = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <Text>{navigation.getParam("rating")}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 28,
  },
});

export default ReviewDetails;
