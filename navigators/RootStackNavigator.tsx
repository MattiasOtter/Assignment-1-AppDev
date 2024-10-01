import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChampionsDetailsScreen from "../screens/ChampionsDetailsScreen";
import ChampionsScreen from "../screens/ChampionsScreen";
import HomeScreen from "../screens/HomeScreen";
import RecommendedChampionsScreen from "../screens/RecommendedChampionsScreen";
import SpotlightScreen from "../screens/SpotlightScreen";

export type RootStackParamList = {
  Home: undefined;
  Champions: undefined;
  ChampionsDetails: { id: string };
  RecommendedChampions: undefined;
  Spotlight: { id: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Champions" component={ChampionsScreen} />
        <RootStack.Screen
          name="ChampionsDetails"
          component={ChampionsDetailsScreen}
        />
        <RootStack.Screen
          name="RecommendedChampions"
          component={RecommendedChampionsScreen}
        />
        <RootStack.Screen name="Spotlight" component={SpotlightScreen} />
      </RootStack.Navigator>
    </RootStack.Navigator>
  );
}
