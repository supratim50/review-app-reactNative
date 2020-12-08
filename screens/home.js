import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { globalStyles } from "../styles/globalStyles";

import Card from "../components/Card";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: "Ali", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "Avenger", rating: 4, body: "lorem ipsum", key: "2" },
    { title: "Guru", rating: 3, body: "lorem ipsum", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
