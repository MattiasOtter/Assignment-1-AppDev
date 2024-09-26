import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import { fetchChampionDetails } from "../api";

type DetailProps = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailAPITestScreen({ route }: DetailProps) {
  const { id } = route.params;
  const [champion, setChampion] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getChampionDetails = async () => {
      try {
        const data = await fetchChampionDetails(id);
        setChampion(data.data[id]);
      } catch (error) {
        console.error("Error fetching champion details:", error);
      } finally {
        setLoading(false);
      }
    };

    getChampionDetails();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!champion) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Champion not found</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>{champion.name}</Text>
      <Text style={styles.title}>{champion.title}</Text>
      <Image
        source={{
          uri: `http://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.image.full}`,
        }}
        style={styles.image}
      />
      <Text style={styles.description}>{champion.blurb}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
