import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({navigation}: HomeProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5383a1d0-fd0a-4d34-adae-b688592ff800/dcynx2p-022bd048-b874-4f69-b449-2c5b8a9a402b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUzODNhMWQwLWZkMGEtNGQzNC1hZGFlLWI2ODg1OTJmZjgwMFwvZGN5bngycC0wMjJiZDA0OC1iODc0LTRmNjktYjQ0OS0yYzViOGE5YTQwMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FbGL5Rlwp3xq1cptTLJ_HWJs20Ho9aqmKZpAZmqqWlk"
        contentFit="cover"
        transition={1000}
        >
<View style={styles.centeredContainer}>
          <TouchableOpacity 
          style={styles.browseButton} 
          onPress={async () => { await Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success); navigation.navigate("Champions")}}>
            <Image source={require("../assets/championsButton.jpeg")} style={styles.buttonImage}/>
          </TouchableOpacity>
        </View>       
</Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 600
  },
  browseButton: {
    borderRadius: 5, // Adjust the radius as needed
    overflow: 'hidden', // Ensure the image is clipped to the rounded corners
  },
  buttonImage: {
    width: 160, // Adjust the width as needed
    height: 40, // Adjust the height as needed
  },
});