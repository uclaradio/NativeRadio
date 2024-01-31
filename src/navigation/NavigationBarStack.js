import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import AboutUsScreen from "../screens/AboutUs";
import HomeScreen from "../screens/HomeScreen";


const Tab = createBottomTabNavigator();

export const NavBarStack = (route) => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { backgroundColor: '#f582dc'},
                
                tabBarIcon:({ focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home'){
                        //iconName = 'home'
                        iconName = 'headphones'
                    } else if (route.name === 'AboutUs'){
                        iconName = 'info'
                        //iconName = 'music'
                    }
                    return <Icon name={iconName} size = {size} color = {color}/>;
                    
                },
                    
                
            })}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: "Home", headerShown: false }}
            />
            <Tab.Screen 
                name="AboutUs" 
                component={AboutUsScreen} 
                options={{ title: "About Us", headerShown: false }}
            />
        </Tab.Navigator>
    );
};