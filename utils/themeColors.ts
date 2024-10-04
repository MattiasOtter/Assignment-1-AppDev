import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
  Theme as NavigationTheme,
} from "@react-navigation/native";
import {
  MD3DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperLightTheme,
  MD3Theme as PaperTheme,
} from "react-native-paper";

export const myLightTheme: PaperTheme & NavigationTheme = {
  ...PaperLightTheme,
  ...NavigationLightTheme,
  colors: {
    ...PaperLightTheme.colors,
    ...NavigationLightTheme.colors,
    background: PaperLightTheme.colors.background,
    // Add any other custom colors if needed
  },
};

export const myDarkTheme: PaperTheme & NavigationTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
    background: PaperDarkTheme.colors.background,
    // Add any other custom colors if needed
  },
};
