import { NavigatorScreenParams } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChampionsDetailsScreen from "../screens/ChampionsDetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import SpotlightScreen from "../screens/SpotlightScreen";
import TabNavigator, { TabParamList } from "./TabNavigator";

export type RootStackParamList = {
  Home: undefined;
  ChampionsNavigator: NavigatorScreenParams<TabParamList>;
  ChampionsDetails: { id: string };
  Spotlight: { id: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ChampionsNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="ChampionsDetails"
        component={ChampionsDetailsScreen}
        options={{ headerBackTitle: "Back" }}
      />

      <RootStack.Screen
        name="Spotlight"
        component={SpotlightScreen}
        options={{ headerBackTitle: "Back" }}
      />
    </RootStack.Navigator>
  );
}
