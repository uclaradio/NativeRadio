import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, Linking } from "react-native"
import { homeStyle } from "../components/Styles";
import FaInstagram from "@expo/vector-icons/FontAwesome";
import FaSpotify from "@expo/vector-icons/FontAwesome";
import FaYoutube from "@expo/vector-icons/FontAwesome";
import FaTwitter from "@expo/vector-icons/FontAwesome";
import FaTiktok from "@expo/vector-icons/FontAwesome5";

import * as Font from 'expo-font';

const AboutUsScreen = (props) => {
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        'BlockKie': require('../../assets/BlockKie.ttf'),
      });
      // Set a state variable to know the font is loaded
      setFontLoaded(true);
    })();
  }, []);
  const [fontLoaded, setFontLoaded] = useState(false);
  const instaLink = "https://www.instagram.com/uclaradio/";
  const spotifyLink =  "https://open.spotify.com/user/uclaradio"; //https://open.spotify.com/user/uclaradio?si=fd25ac77dcbf4f50&nd=1"
  const twitterLink = "https://twitter.com/UCLAradio";
  const youtubeLink = "https://www.youtube.com/@UCLARadio";
  const tiktokLink = "https://www.tiktok.com/@uclaradio";

  const openSocials = (url) => {
    console.log(url);
    Linking.openURL(url);
  };
  
return ( 
    <View style={homeStyle.container}>
        {fontLoaded && (
      <>
        <Image 
          source={require('../../assets/pinkLogo.png')}
          style={homeStyle.logo}
        />
        <Text style={[styles.header, { fontFamily: 'BlockKie' }]}>Who We Are</Text>
        <Text style={[styles.bio, { fontFamily: 'BlockKie' }]}>UCLA Radio is the official student-run radio station of UCLA. 
            We are non-commercial, listener-supported, and have been broadcasting high-quality, freeform programming since 1962. 
            While our primary focus is delivering original and diverse radio content, UCLA Radio members work on art, design, web development, 
            marketing, photography, audio production, and more. Our station strives to promote a safe, inclusive music scene and provide a community for innovative, 
            motivated students from different majors and backgrounds to explore their creativity, build practical skills, and discover the LA music and art scene.
       </Text>
       <View style={styles.buttons}> 
       <FaInstagram name='instagram' size={30} style={{ marginHorizontal: 10 }} color ='#f582dc' onPress={() => openSocials(instaLink)} />
      <FaSpotify name='spotify' size={30} style={{ marginHorizontal: 10 }} color ='#f582dc' onPress={() => openSocials(spotifyLink)} />

        <FaYoutube name='youtube-play' size={30} style={{ marginHorizontal: 10 }} color ='#f582dc'  onPress={() => openSocials(youtubeLink)} />
        <FaTwitter name='twitter' size={30} style={{ marginHorizontal: 10 }} color ='#f582dc'  onPress={() => openSocials(twitterLink)} />
        <FaTiktok name='tiktok' size={30} style={{ marginHorizontal: 10 }}  color ='#f582dc' onPress={() => openSocials(tiktokLink)} />
        </View>
      </>
    )}
       
    </View>

)}

const styles = StyleSheet.create({
  buttons: {
    fontFamily: 'BlockKie',
    flexDirection: 'row',     // Align children horizontally
    justifyContent: 'center', // Center children in the main axis
    alignItems: 'center',     // Center children in the cross axis
    position: 'absolute',     // Position the container absolutely
    bottom: 20,               // Distance from the bottom of the screen
    left: 0,                  // Align to the left of the screen
    right: 0,                 // Align to the right of the screen
  },
  
    container: {
      fontFamily: 'BlockKie',
      backgroundColor: '#F3D0F1',
      flex: 1,
      padding: 20,
    },
    header: {
      marginTop: -30,
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      
      fontSize: 35,
    },
    bio: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '15%',
      marginRight: '15%',
      lineHeight: 30,
    },
});

export default AboutUsScreen;