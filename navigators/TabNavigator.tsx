import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useTheme } from "react-native-paper";
import ChampionsScreen from "../screens/ChampionsScreen";
import RecommendedChampionsScreen from "../screens/RecommendedChampionsScreen";

export type TabParamList = {
  Champions: undefined;
  Recommended: undefined;
};

const BottomTab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  const { colors } = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.background },
      }}
    >
      <BottomTab.Screen
        name="Champions"
        component={ChampionsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Recommended"
        component={RecommendedChampionsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="favorite" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
