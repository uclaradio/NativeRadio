import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Animated } from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import FadeScreen from './src/screens/FadeScreen';
import AboutUsScreen from './src/screens/AboutUs';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavBarStack } from './src/navigation/NavigationBarStack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
//import { ReactNativeAudioStreaming } from 'react-native-audio-streaming';
//import { Audio } from 'expo-av';
//import { TrackPlayer } from 'react-native-track-player';

//streamURL will hold the Radio Stream link and we can reference this later...
const url = 'https://securestreams4.autopo.st:1643/';


export default function App() {
  const [loading, setloading] = useState(true); 
  const [fontsLoaded] = useFonts({'BlockKie': require('./assets/fonts/BlockKie.ttf')});
  useEffect(() => {
    var delayInMilliseconds = 5000; //1 second
    setTimeout(function() {
      //your code to be executed after 1 second
      setloading(false);
    }, delayInMilliseconds);
    }, [])
  //ReactNativeAudioStreaming.play(url, {showIniOSMediaCenter: true, showInAndroidNotifications: true});

  return (
    <NavigationContainer>
      {loading ? (
        <FadeScreen/>
      ) : (
        <NavBarStack />
      )}
    </NavigationContainer>
  );
}