Thie project is built with react native and expo.

## Expo components:
[Image] - expo-image
[ResizeMode], [Video] - expo-av
[Haptics] - expo-haptics
[activateKeepAwakeAsync], [deactivateKeepAwake] - expo-keep-awake

## React Native components:
[Button]
[StyleSheet]
[Text]
[TouchableOpacity]
[View]
[ScrollView]
[ActivityIndicator]
[SafeAreaView]

### OBS ! ! !
The project uses an Api to fetch data for the champions that are displayed. To use this Api a Key is needed.
The Key is obtained by creating an account on: [https://developer.riotgames.com/apis]
On the websight it says that the key will only work for 24h and then the key is renewed and you have to copy the new key.
But for some reason the key seems to be working without being updated. If not, contact me and i will send you the new renewed key.

## Walkthrough of the app:
On the HomeScreen you push "CHAMPIONS" to enter the next screen. When pushed the phone uses haptics to vibrate.
On the ChampionsScreen you can choose a champion to see details about the champion, you can press the Go to Details button beneath or press the picture of the chosen champion. 
On the DetailScreen the image of the chosen champion appears and also a small description.  
On the ChampionsScreen you can also see the TabNavigator where you can choose to see recommended champions. This page is similar to the ChampionsScreen but with fewer choices. If you press on a champion you will be directed to RecommendedChampionsScreen where a description of the character and a Champion Spotlight (champion tutorial) video appears. The View with the video will show a loading buffer until its ready to be shown. Once ready, you may play the video. When the video is played, Keep Awake will activate and when paused the Keep Awake will deactivate. If there is no spotlight of a chosen champion the View of the video will say so and if you try to press it, haptics will send off a vibration indicating Error.

## What ive used:
    React-Native:
        npx expo install react-native-screens react-native-safe-area-context
        npm install @react-navigation/native-stack
        npm install @react-navigation/native
        npm install @react-navigation/bottom-tabs
        npm install react-native-paper
    Expo:
        npx expo install expo-image
        npx expo install expo-av
        npx expo install expo-haptics
        npx expo install expo-keep-awake

## To run the project:
npm install
npm start
