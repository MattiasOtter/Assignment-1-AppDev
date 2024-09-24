import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ChampionsScreen from './screens/ChampionsScreen';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';


export type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
  Champions: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component ={HomeScreen} options={{headerShown: false}}/>
        {/* <RootStack.Screen name="Champions" component ={VideoScreen}/> */}
        <RootStack.Screen name="Champions" component ={ChampionsScreen}/>
        <RootStack.Screen name="Details" component ={DetailsScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}