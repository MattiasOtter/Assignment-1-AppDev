import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { characters } from "../components/Characters";

type ChampionProps = NativeStackScreenProps<RootStackParamList, "Champions">;

export default function ChampionsScreen({navigation}: ChampionProps) {
    return (
      <View style={ styles.container }>
        <ScrollView>
        <Text>Champions</Text>
        {characters.map((item, index) => (
            <View key={index} style={styles.characterContainer}>
          <Text style={styles.characterName}>{item.name}
          </Text>
          <Image
          source={{ uri: item.image }}
          style={styles.characterImage}
          />
        <Button title="Go to Details" onPress={() => navigation.navigate("Details", { id: item.id })}/>
          </View>
        ))}
        </ScrollView>
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
    characterContainer: {
      alignItems: 'center', // Center the content horizontally
      marginBottom: 20, // Add some space between characters
    },
    characterName: {
      fontSize: 18,
      marginBottom: 10, // Add some space between the name and the image
    },
    characterImage: {
      width: 350,
      height: 300,
    },
  });