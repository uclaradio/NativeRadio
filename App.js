import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Animated } from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import FadeScreen from './src/screens/FadeScreen';
import AboutUsScreen from './src/screens/AboutUs';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavBarStack } from './src/navigation/NavigationBarStack';
import { NavigationContainer } from '@react-navigation/native';
//streamURL will hold the Radio Stream link and we can reference this later...
const streamUrl = 'https://securestreams4.autopo.st:1643/';


export default function App() {
  const [loading, setloading] = useState(true); 
  useEffect(() => {
    var delayInMilliseconds = 5000; //1 second

  setTimeout(function() {
    //your code to be executed after 1 second
    setloading(false);
  }, delayInMilliseconds);
  }, [])

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
//On line 25 switch HomeScreen to AboutUsScreen or add button (dropdown) to navigate/view to AboutUsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f582dc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topHalf: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200, 
    resizeMode: 'contain', 
  },
});
