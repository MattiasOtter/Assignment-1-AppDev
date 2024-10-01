import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import RootStackNavigator from "./navigators/RootStackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStackNavigator />
    </NavigationContainer>
  );
}
