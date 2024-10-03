import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { characters } from "../components/characters";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { AppTheme } from "../utils/themeColors";

type RecommendedChampionsProps = NativeStackScreenProps<RootStackParamList>;

export default function RecommendedChampionsScreen({
  navigation,
}: RecommendedChampionsProps) {
  const { colors } = useTheme<AppTheme>();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.safeArea, { marginBottom: -36 }]}>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <ScrollView
          contentContainerStyle={[
            styles.scrollContainer,
            { backgroundColor: colors.background },
          ]}
        >
          {characters.map((recommendedChampions, index) => (
            <Card
              key={index}
              style={styles.characterContainer}
              onPress={() =>
                navigation.navigate("Spotlight", {
                  id: recommendedChampions.id,
                })
              }
            >
              <View style={styles.centeredTitleContainer}>
                <Text style={styles.characterName}>
                  {recommendedChampions.name}
                </Text>
              </View>
              <Image
                source={recommendedChampions.image}
                style={[
                  styles.characterImage,
                  { width, height: (width * 9) / 16 },
                ]}
              />
              <Button
                title="Go to Details"
                onPress={() =>
                  navigation.navigate("Spotlight", {
                    id: recommendedChampions.id,
                  })
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
  characterContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  characterName: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  characterImage: {
    resizeMode: "cover",
  },
  centeredTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
