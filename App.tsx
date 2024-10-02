import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import RootStackNavigator from "./navigators/RootStackNavigator";

export default function App() {
  const colorscheme = useColorScheme();

  const theme = colorscheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
