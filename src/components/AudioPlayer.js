
// // ./src/components/AudioPlayer.js
// import React, { useState, useEffect } from 'react';
// import { Audio } from 'expo-av';

// const AudioPlayer = ({ play }) => {
//   const [sound, setSound] = useState(null);
//   useEffect(() => {
//     async function configureAudioMode() {
//       try {
//         await Audio.setAudioModeAsync({
//           staysActiveInBackground: true,
//           shouldDuckAndroid: true,
//           playThroughEarpieceAndroid: true,
//           allowsRecordingIOS: true,
//           playsInSilentModeIOS: true,
//         });
//       } catch (e) {
//         console.error("Failed to set audio mode", e);
//       }
//     }

//     configureAudioMode();
//   }, []);
  
//   useEffect(() => {

//     async function loadAudio() {
//       if (sound) {
//         await sound.unloadAsync();
//       }
//       try {
//         const { sound: newSound } = await Audio.Sound.createAsync(
//           { uri: 'https://securestreams4.autopo.st:1643' }, // Use the URL here
//           { shouldPlay: play } // Automatically play when loaded if `play` is true
//         );
//         setSound(newSound);
//       } catch (error) {
//         console.error("Error loading audio from URL:", error);
//       }
//     }
    

//     loadAudio();

//     return () => {
//       sound?.unloadAsync();
//     };
//   }, []);

//   useEffect(() => {
//     Audio.setAudioModeAsync({
//       playsInSilentModeIOS: true,
//     });
//     async function handlePlay() {
//       if (play && sound) {
//         console.log("Attempting to play...");
//         try {
//           const status = await sound.getStatusAsync();
//           if (status.isLoaded && !status.isPlaying) {
//             await sound.playAsync();
//           }
//         } catch (error) {
//           console.error("Error during play:", error);
//         }
//       } else if (!play && sound) {
//         console.log("Attempting to pause...");
//         try {
//           const status = await sound.getStatusAsync();
//           if (status.isLoaded && status.isPlaying) {
//             await sound.pauseAsync();
//           }
//         } catch (error) {
//           console.error("Error during pause:", error);
//         }
//       }
//     }

//     handlePlay();
//   }, [play]);

//   return null;
// };

// export default AudioPlayer;


import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

const AudioPlayer = ({ play }) => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    async function configureAudioMode() {
      try {
        await Audio.setAudioModeAsync({
          staysActiveInBackground: true,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: true,
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
      } catch (e) {
        console.error("Failed to set audio mode", e);
      }
    }

    configureAudioMode();
  }, []);

  useEffect(() => {
    async function loadAudio() {
      if (play) {
        if (sound) {
          await sound.unloadAsync().catch(e => console.error("Error unloading sound", e));
        }
        try {
          const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: 'https://securestreams4.autopo.st:1643' },
            { shouldPlay: true }
          );
          setSound(newSound);
        } catch (error) {
          console.error("Error loading audio from URL:", error);
        }
      } else {
        if (sound) {
          //await sound.stopAsync().catch(e => console.error("Error stopping sound", e));
          await sound.unloadAsync().catch(e => console.error("Error unloading sound", e));
        }
      }
    }

    loadAudio();

    return () => {
      if (sound) {
        sound.unloadAsync().catch(e => console.error("Error unloading sound on unmount", e));
      }
    };
  }, [play]);

  return null;
};

export default AudioPlayer;
