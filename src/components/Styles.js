import React from "react"
import {View, StyleSheet, Dimensions} from "react-native"


/*
  -- DOCUMENTATION --
*/
const screenWidth = Dimensions.get('window').width;

export const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F3D0F1',
       alignItems: 'center',
       //justifyContent: 'center',
    },
    logo: {
        width: screenWidth * 0.5, 
        height: screenWidth * 0.5, 
        resizeMode: 'contain',
        marginTop: 10,

    },
  });
  

export const sharedStyles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#f582dc',
      backgroundColor: '#F3D0F1',
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


