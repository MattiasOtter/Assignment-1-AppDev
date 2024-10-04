import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchChampions } from "../api";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { TabParamList } from "../navigators/TabNavigator";

type ChampionProps = CompositeScreenProps<
NativeStackScreenProps<RootStackParamList>,
BottomTabScreenProps<TabParamList, "Champions">
>;


export default function ChampionsScreen({ navigation }: ChampionProps) {
  const { colors } = useTheme();
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
    <SafeAreaView style={[styles.safeArea, { marginBottom: -36 }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContainer,
            { backgroundColor: colors.background },
          ]}
        >
          {champions.map((champion, index) => (
            <Card
              key={index}
              style={styles.characterContainer}
              onPress={() =>
                navigation.navigate("ChampionsDetails", { id: champion.id })
              }
            >
              <View style={styles.centeredTitleContainer}>
                <View style={styles.nameView}>
                  <Text style={styles.characterName}>{champion.name}</Text>
                </View>
                <View style={styles.roleView}>
                  {champion.tags.map((tag: any, i: any) => (
                    <Text key={i} style={styles.characterRole}>
                      {tag}
                      {i < champion.tags.length - 1 ? " - " : ""}
                    </Text>
                  ))}
                </View>
              </View>
              <Image
                source={{
                  uri: `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`,
                }}
                style={[
                  styles.characterImage,
                  { width, height: (width * 9) / 16 },
                ]}
              />
              <Button
                title="Go to Details"
                onPress={() =>
                  navigation.navigate("ChampionsDetails", { id: champion.id })
                }
              />
            </Card>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
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
    marginBottom: 10,
    marginTop: 10,
  },
  characterName: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  nameView: {
    flex: 1,
    marginLeft: "10%",
  },
  characterRole: {
    fontSize: 16,
  },
  roleView: {
    flex: 1,
    marginRight: "10%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  characterImage: {
    resizeMode: "cover",
  },
  centeredTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 3,
  },
});
