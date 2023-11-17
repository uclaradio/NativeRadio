import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Fade from "../components/Fade";

const FadeScreen = (props) => {
    return (
        <View>
            <Fade 
            style={styles.topHalf}>
            <Image source={require('../../assets/record.png')} style={styles.logo}/>
            </Fade>
        </View>
    );
};

const styles = StyleSheet.create({
    topHalf: {
      marginTop: "25%",
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    logo: {
      width: 600,
      height: 600, 
      resizeMode: 'contain', 
    },
  });


export default FadeScreen;