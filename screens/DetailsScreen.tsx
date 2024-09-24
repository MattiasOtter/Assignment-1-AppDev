import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { characters } from "../components/Characters";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

const videoMap: { [key: string]: any } = {
  "ahri": require("../assets/videos/ahri.mp4"),
  "garen": require("../assets/videos/garen.mp4"),
};

export default function DetailsScreen({ route }: DetailsProps) {
  const character = characters.filter(item => item.id === route.params.id);
  const video = useRef(null);
  const [status, setStatus] = useState<AVPlaybackStatus>();
  const [isLoading, setIsLoading] = useState(true);
  const [prevPlaying, setPrevPlaying] = useState(false);

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

    return (
      <View style={ styles.container }>
        {/* <ScrollView> */}
          {character.map((item, index) => (
            <View style={styles.characterContainer} key={index}>
              <Text style={styles.characterName}>{item.name}</Text>
              <Image
              source={{ uri: item.image }}
              style={styles.characterImage} />
              <Text style={styles.descriptionText}>{item.description}</Text>
              <View>
                {videoMap[item.id] ? (
                  <>
                    {isLoading && (
                      <View style={styles.placeholderContainer}>
                        <ActivityIndicator size="large" color="#0000ff" />
                      </View>
                    )}
                    <Video 
                      style={styles.video}
                      source={videoMap[item.id]}
                      useNativeControls
                      resizeMode={ResizeMode.CONTAIN}
                      onPlaybackStatusUpdate={status => {
                        setStatus(() => status);
                      }}                      
                      onLoadStart={() => setIsLoading(true)}
                      onLoad={() => setIsLoading(false)}
                    />
                  </>
                ) : (
                  <Pressable onPress={async () => { await Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Error);}} style={styles.noVideoContainer}>
                    <Text style={styles.noVideoText}>No video available for this champion.</Text>
                  </Pressable>
                )}
              </View>
            </View>
          ))}
        {/* </ScrollView> */}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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

      descriptionText: {
        width: "90%",
        marginBottom: 20,
      },

      placeholderContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
      },

      video: {
        width: 430,
        // width: "100%",
        height: 300,
      },
      noVideoContainer: {
        width: 430,
        // width: "100%",
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(128, 128, 128, 0.7)',
      },
      noVideoText: {
        fontSize: 18,
        color: '#fff',
      },
  });