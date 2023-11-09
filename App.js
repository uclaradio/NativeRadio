import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image,View } from 'react-native';
//import { Button } from 'react-native';
//import TrackPlayer from 'react-native-track-player';


//streamURL will hold the Radio Stream link and we can reference this later...
const streamUrl = 'https://securestreams4.autopo.st:1643/';

export default function App() {
  
  return (


    
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Ucla Radio Dev Baddddiees hard at work </Text>
      <StatusBar style="auto" />
    </View>
  );
}
//comment

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
    width: 200, // Set the width of your logo
    height: 200, // Set the height of your logo
    resizeMode: 'contain', // This will ensure that your image is resized in a way that maintains the aspect ratio
  },
});
