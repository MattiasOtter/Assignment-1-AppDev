import {
    MD3DarkTheme as DarkTheme,
    MD3LightTheme as LightTheme,
  } from "react-native-paper";
  
  export const myLightTheme = {
    ...LightTheme,
    myOwnProperty: true,
    colors: {
      ...LightTheme.colors,
      myOwnColor: "#BADA55",
      myBackground: "#BAB222",
    },
  };

  export type AppTheme = typeof myLightTheme;
  
  export const myDarkTheme = {
    ...DarkTheme,
    myOwnProperty: true,
    colors: {
      ...DarkTheme.colors,
      myOwnColor: "#EDA164",
      myBackground: "#BADA55",
    },
  };
  