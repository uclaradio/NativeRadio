import React, {useCallback} from "react"
import { Text, View, StyleSheet, Linking } from "react-native"

import FaInstagram from "@expo/vector-icons/FontAwesome";
import FaSpotify from "@expo/vector-icons/FontAwesome";
import FaYoutube from "@expo/vector-icons/FontAwesome";
import FaTwitter from "@expo/vector-icons/FontAwesome";
import FaTiktok from "@expo/vector-icons/FontAwesome5";

import { sharedStyles } from "../components/Styles";
/*
  -- DOCUMENTATION --
*/

const AboutUsScreen = (props) => {
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
    <View style={styles.container}>
        <Text style={styles.header}>about us</Text>
        <Text style={styles.bio}>UCLA Radio is the official student-run radio station of UCLA. 
            We are non-commercial, listener-supported, and have been broadcasting high-quality, freeform programming since 1962. 
            While our primary focus is delivering original and diverse radio content, UCLA Radio members work on art, design, web development, 
            marketing, photography, audio production, and more. Our station strives to promote a safe, inclusive music scene and provide a community for innovative, 
            motivated students from different majors and backgrounds to explore their creativity, build practical skills, and discover the LA music and art scene.
       </Text>
       <View style={styles.buttons}> 
        <FaInstagram name ='instagram' style={styles.button} size={30} onPress= {() =>openSocials(instaLink)}/>
        <FaSpotify name ='spotify' style={styles.button} size={30} onPress= {() =>openSocials(spotifyLink)}/>
        <FaYoutube name ='youtube-play' style={styles.button} size={30} onPress= {() =>openSocials(youtubeLink)}/>
        <FaTwitter name ='twitter' style={styles.button} size={30} onPress= {() =>openSocials(twitterLink)}/>
        <FaTiktok name ='tiktok' style={styles.button} size={30} onPress= {() =>openSocials(tiktokLink)}/>
       </View>
    </View>

)}

const styles = StyleSheet.create({
    buttons: {
      marginLeft: '93%',
      size: 30,
      position: 'sticky',
    },
    button: {
      paddingBottom: '5%',
    },
    container: {
      backgroundColor: '#F3D0F1',
      flex: 1,
      padding: 5,
    },
    header: {
      marginTop: '40%',
      marginBottom:'5%',
      flex: .25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '35%',
      fontSize: 30,
      fontFamily: "BlockKie"
    },
    bio: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '15%',
      marginRight: '15%',
      lineHeight: 27,
      fontFamily: "BlockKie",
    },
});

export default AboutUsScreen;