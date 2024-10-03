import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import RootStackNavigator from "./navigators/RootStackNavigator";
import { myDarkTheme, myLightTheme } from "./utils/themeColors";

export default function App() {
  const colorscheme = useColorScheme();

  const theme = colorscheme === "dark" ? myDarkTheme : myLightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar backgroundColor={theme.colors.background} style="auto" />
        <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
