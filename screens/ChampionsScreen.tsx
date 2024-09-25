import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from 'expo-image';
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { characters } from "../components/Characters";





type ChampionProps = NativeStackScreenProps<RootStackParamList, "Champions">;

export default function ChampionsScreen({navigation}: ChampionProps) {
  
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {characters.map((item, index) => (
          <Pressable 
          key={index} 
          style={styles.characterContainer}
          onPress={() => navigation.navigate("Details", { id: item.id })}>
          <Text style={styles.characterName}>{item.name}</Text>
          <Image
          source={{ uri: item.image }}
          style={styles.characterImage}
          />
        <Button title="Go to Details" onPress={() => navigation.navigate("Details", { id: item.id })}/>
        <View style={styles.line} />

          </Pressable>
        ))}
        </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center', 
    },
    characterContainer: {
      width: "100%",
      alignItems: 'center',
      marginBottom: 5,  
    },
    characterName: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 5,
      marginTop: 10,
    },
    characterImage: {
      width: "100%",
      height: 300,
    },
    line: {
      width: "100%",
      height: 1,
      backgroundColor: 'rgba(128, 128, 128, 0.7)', 
      marginVertical: 10, 
    },
  });