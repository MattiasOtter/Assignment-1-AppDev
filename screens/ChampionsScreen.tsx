import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { fetchChampions } from "../api";
import { RootStackParamList } from "../navigators/RootStackNavigator";

type ChampionProps = NativeStackScreenProps<RootStackParamList, "Champions">;

export default function ChampionsScreen({ navigation }: ChampionProps) {
  const [champions, setChampions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const getChampions = async () => {
      try {
        const data = await fetchChampions();
        setChampions(Object.values(data.data));
      } catch (error) {
        console.error("Error fetching champions:", error);
      } finally {
        setLoading(false);
      }
    };

    getChampions();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {champions.map((champion, index) => (
        <Pressable
          key={index}
          style={styles.characterContainer}
          onPress={() =>
            navigation.navigate("ChampionsDetails", { id: champion.id })
          }
        >
          <Text style={styles.characterName}>{champion.name}</Text>
          <Image
            source={{
              uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
            }}
            style={[styles.characterImage, { width, height: (width * 9) / 16 }]}
          />
          <Button
            title="Go to Details"
            onPress={() =>
              navigation.navigate("ChampionsDetails", { id: champion.id })
            }
          />
          <View style={styles.line} />
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  characterContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  characterName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
  },
  characterImage: {
    resizeMode: "cover",
  },
  line: {
    height: 1,
    backgroundColor: "#ccc",
    width: "100%",
    marginVertical: 10,
  },
});
