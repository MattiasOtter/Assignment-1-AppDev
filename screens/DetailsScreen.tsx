import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { characters } from "../components/Characters";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsScreen({ route }: DetailsProps) {
    const character = characters.filter(item => item.id === route.params.id);

    return (
      <View style={ styles.container }>
        <Text style={{marginBottom: 30}}>{route.name} Screen!</Text>
        <ScrollView>
        {character.map((item, index) => (
            <View style={styles.characterContainer} key={index}>
          <Text  style={styles.characterName}>{item.name}
          </Text>
          <Image
          source={{ uri: item.image }}
          style={styles.characterImage} />
          <Text style={{ width: 350}}>{item.description}</Text>
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