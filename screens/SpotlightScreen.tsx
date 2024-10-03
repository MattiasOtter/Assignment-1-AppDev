import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AVPlaybackStatus, ResizeMode, Video } from "expo-av";
import { Image } from "expo-image";
import { activateKeepAwakeAsync, deactivateKeepAwake } from "expo-keep-awake";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { characters } from "../components/characters";
import { RootStackParamList } from "../navigators/RootStackNavigator";
import { haptics } from "../utils/haptics";
import { imagePaths } from "../utils/imagePaths";
import { AppTheme } from "../utils/themeColors";

type SpotlightProps = NativeStackScreenProps<RootStackParamList, "Spotlight">;

const videoMap: { [key: string]: any } = {
  ahri: require("../assets/videos/ahri.mp4"),
  garen: require("../assets/videos/garen.mp4"),
};

export default function SpotlightScreen({ route }: SpotlightProps) {
  const { colors } = useTheme<AppTheme>();
  const character = characters.filter((item) => item.id === route.params.id);
  const { width } = useWindowDimensions();
  const [status, setStatus] = useState<AVPlaybackStatus>();
  const [isLoading, setIsLoading] = useState(true);
  const [prevPlaying, setPrevPlaying] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    if (status) {
      if (status.isLoaded && status.isPlaying && !prevPlaying) {
        activateKeepAwakeAsync();
        console.log("Activated!");
        setPrevPlaying(true);
      } else if (status.isLoaded && !status.isPlaying && prevPlaying) {
        deactivateKeepAwake();
        console.log("Deactivated!");
        setPrevPlaying(false);
      }
    }
  }, [status, prevPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current?.pauseAsync();
    } else {
      videoRef.current?.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const loadImages = (championId: string) => {
    return imagePaths[championId] || [];
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {character.map((champion, index) => (
        <View style={styles.characterContainer} key={index}>
          <Text style={styles.characterName}>{champion.name}</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
          >
            {loadImages(champion.id).map((image, i) => (
              <Image
                key={i}
                source={image}
                style={[styles.characterImage, { width: width }]}
              />
            ))}
          </ScrollView>
          <Text style={styles.descriptionText}>{champion.description}</Text>
          <View>
            {videoMap[champion.id] ? (
              <>
                {isLoading && (
                  <View style={styles.placeholderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                  </View>
                )}
                <Video
                  ref={videoRef}
                  style={{ width: width, height: width * 0.5625 }} // 16:9 aspect ratio
                  source={videoMap[champion.id]}
                  useNativeControls
                  resizeMode={ResizeMode.CONTAIN}
                  onPlaybackStatusUpdate={(status) => {
                    setStatus(() => status);
                  }}
                  onLoadStart={() => setIsLoading(true)}
                  onLoad={() => setIsLoading(false)}
                />
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <IconButton
                    icon={isPlaying ? "pause" : "play"}
                    onPress={handlePlayPause}
                    style={{ height: 50, width: 50 }}
                    size={50}
                  />
                </View>
              </>
            ) : (
              <Pressable
                onPress={() => haptics.success()}
                style={styles.noVideoContainer}
              >
                <Text style={styles.noVideoText}>
                  No video available for this champion.
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  characterContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 5,
  },
  characterName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 10,
  },
  characterImage: {
    height: 300,
    marginRight: 10,
  },
  descriptionText: {
    width: "90%",
    marginBottom: 20,
    marginTop: 5,
    fontSize: 15,
  },
  placeholderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(128, 128, 128, 0.7)",
  },
  noVideoContainer: {
    width: 430,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(128, 128, 128, 0.7)",
  },
  noVideoText: {
    fontSize: 18,
    color: "#fff",
  },
});
