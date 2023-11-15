import {Animated } from 'react-native';
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

  export default Fade;