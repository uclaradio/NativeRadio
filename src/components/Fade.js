import {Animated } from 'react-native';
import React, {useRef, useEffect} from 'react';

//Logo Animation 
const Fade = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const spinValue = useRef(new Animated.Value(0)).current;
    const interpolation = spinValue.interpolate({
      inputRange: [0,1],
      outputRange: ['0deg', '720deg'],
    });
  
    useEffect(() => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2500,
            useNativeDriver: true,
          }),
          Animated.timing(spinValue, {
            toValue: 1,
            duration: 3500,
            useNativeDriver: true,
          }),
         ]), 
        Animated.parallel([ 
          Animated.timing(spinValue, {
            toValue: 2,
            duration: 3500,
            useNativeDriver: true,
          }),
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 2500,
            useNativeDriver: true,
          })
        ])
      ]).start();
    }, [fadeAnim]);
  
      return (
  
             <Animated.View 
             style={{
               ...props.style,
               opacity: fadeAnim, 
               transform: [
                {rotate: interpolation}
               ]
             }}>
             {props.children}
           </Animated.View>
  
      );
  };

  export default Fade;