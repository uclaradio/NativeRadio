import React from "react"
import {View, StyleSheet} from "react-native"


/*
  -- DOCUMENTATION --
*/

export const sharedStyles = StyleSheet.create({
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
