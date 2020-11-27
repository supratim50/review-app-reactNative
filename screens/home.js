import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 28,
  },
});

export default Home;
