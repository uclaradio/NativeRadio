import React from "react"
import {Text, View, StyleSheet} from "react-native"

/*
  -- DOCUMENTATION --
*/
const AboutUsScreen = (props) => {
return ( 
    <View style={styles.container}>
        <Text style={styles.header}>Who We Are</Text>
        <Text style={styles.bio}>UCLA Radio is the official student-run radio station of UCLA. 
            We are non-commercial, listener-supported, and have been broadcasting high-quality, freeform programming since 1962. 
            While our primary focus is delivering original and diverse radio content, UCLA Radio members work on art, design, web development, 
            marketing, photography, audio production, and more. Our station strives to promote a safe, inclusive music scene and provide a community for innovative, 
            motivated students from different majors and backgrounds to explore their creativity, build practical skills, and discover the LA music and art scene.
        </Text>
    </View>
)}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    header: {
      marginTop: '50%',
      flex: .25,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '25%',
      fontSize: 30,
    },
    bio: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: '15%',
      marginRight: '15%',
      lineHeight: 27,
    },
});

export default AboutUsScreen;