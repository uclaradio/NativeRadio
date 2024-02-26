// HomeScreen.js
import React, { useEffect, useState } from 'react';

import { Image, View, TouchableOpacity } from "react-native";
import { homeStyle } from "../components/Styles";
import AudioPlayer from "../components/AudioPlayer";

const HomeScreen = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <View style={homeStyle.container}>
      <Image 
        source={require('../../assets/pinkLogo.png')}
        style={homeStyle.logo}
      />
      <Image 
        source={require('../../assets/Filler.jpg')}
        style={{ width: '79%', height: 300, resizeMode: 'contain', alignSelf: 'center',
        borderWidth: 5, borderColor: '#303030'  }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <TouchableOpacity onPress={togglePlay} disabled={isPlaying}>
          <Image 
            source={require('../../assets/play.png')}
            style={{ width: 100, height: 60, marginHorizontal: 10, opacity: isPlaying ? 0.7 : 1 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={togglePlay} disabled={!isPlaying}>
          <Image 
            source={require('../../assets/stop.png')}
            style={{ width: 100, height: 60, marginHorizontal: 10, opacity: !isPlaying ? 0.7 : 1 }}
          />
        </TouchableOpacity>
      </View>
      <AudioPlayer play={isPlaying} />
      
    </View>
  );
};

export default HomeScreen;
