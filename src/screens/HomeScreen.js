import React from "react"
import {Image, Text, View, SafeAreaView, Dimensions} from "react-native"
import { homeStyle } from "../components/Styles"

/*
  -- DOCUMENTATION --
*/
const HomeScreen = (props) => {
return (
    <View style={homeStyle.container} >
        <Image source={require('../../assets/pinkLogo.png')}
        style={homeStyle.logo}
        />
        
    </View>
)
}


export default HomeScreen;