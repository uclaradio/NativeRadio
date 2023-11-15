import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, Animated } from 'react-native';
import React, {useRef, useEffect} from 'react';

//Logo Animation 
const Fade = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }), //.start(); //,
    Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2500,
        useNativeDriver: true,
      })
    ]).start();
  }, [fadeAnim]);

    return (
      <Animated.View 
        style={{
          ...props.style,
          opacity: fadeAnim, 
        }}>
        {props.children}
      </Animated.View>
    );
};

//streamURL will hold the Radio Stream link and we can reference this later...
const streamUrl = 'https://securestreams4.autopo.st:1643/';

export default function App() {
  return (
    <View style={styles.container} >
      <Fade 
        style={styles.topHalf}>
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Ucla Radio Dev Baddddiees hard at work </Text>
      </Fade>
    </View>
  );
}

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
