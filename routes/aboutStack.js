import { createStackNavigator } from "react-navigation-stack";
// screens
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
      title: "Game Zone",
    },
  },
};

const aboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#eee", height: 70 },
  },
});

export default aboutStack;
