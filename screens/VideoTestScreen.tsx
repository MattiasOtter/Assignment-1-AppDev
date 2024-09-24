// import { useVideoPlayer, VideoView } from 'expo-video';
// import { useEffect, useRef, useState } from 'react';
// import { Button, StyleSheet, View } from 'react-native';

// const videoSource =
//   'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

// export default function VideoScreen() {
//   const ref = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const player = useVideoPlayer(videoSource, player => {
//     player.loop = true;
//     player.play();
//   });

//   useEffect(() => {
//     const subscription = player.addListener('playingChange', isPlaying => {
//       setIsPlaying(isPlaying);
//     });

//     return () => {
//       subscription.remove();
//     };
//   }, [player]);

//   return (
//     <View style={styles.contentContainer}>
//       <VideoView
//         ref={ref}
//         style={styles.video}
//         player={player}
//         allowsFullscreen
//         allowsPictureInPicture
//       />
//       <View style={styles.controlsContainer}>
//         <Button
//           title={isPlaying ? 'Pause' : 'Play'}
//           onPress={() => {
//             if (isPlaying) {
//               player.pause();
//             } else {
//               player.play();
//             }
//             setIsPlaying(!isPlaying);
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   contentContainer: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 50,
//   },
//   video: {
//     width: 350,
//     height: 275,
//   },
//   controlsContainer: {
//     padding: 10,
//   },
// });



import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export function VideoPlayer() {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const player = useVideoPlayer(videoSource, player => {
    player.loop = false;
    player.play();
  });

  useEffect(() => {
    const subscription = player.addListener('playingChange', isPlaying => {
      setIsPlaying(isPlaying);
    });

    return () => {
      subscription.remove();
    };
  }, [player]);

  return (
    <View style={styles.contentContainer}>
      <VideoView
        ref={ref}
        style={styles.video}
        player={player}
        allowsFullscreen
        allowsPictureInPicture
      />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
  controlsContainer: {
    marginTop: 10,
  },
});