import React from "react"
import { useEffect, useState } from 'react';
import {Image, Text, View, SafeAreaView, Dimensions, Button} from "react-native"
import { homeStyle } from "../components/Styles"
//import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
//import { Audio } from "expo-av"
//import { TrackPlayer } from 'react-native-track-player'; //NOT COMPATIBLE WITH EXPO

/*
  -- DOCUMENTATION --
*/


const HomeScreen = (props) => {
  /*const [sound, setSound] = useState();

  async function playSound() {
    console.log('Loading Sound');
    
    const {sound} = await Audio.sound.createAsync({
      uri: 'https://securestreams4.autopo.st:1643/'
    });
    await sound.playAsync();
  }
  
  /*useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);*/

return (
    <View style={homeStyle.container} >
        <Image source={require('../../assets/pinkLogo.png')}
        style={homeStyle.logo}
        />

    </View>
)
}

// <Button title="Play Sound" onPress={playSound} />
export default HomeScreen;