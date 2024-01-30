import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

import AboutUsScreen from "../screens/AboutUs";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export const NavBarStack = (route) => {
    return (
        <Tab.Navigator
            screenOptions={({routee}) => ({
                tabBarActiveTintColor: '#007AFF',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon:({ focused, color, size}) => {
                    let iconName;
                    if (route.name === 'Home'){
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'AboutUs'){
                        iconName = focused ? 'info' : 'info-outline';
                    }
                    return <Icon name={iconName} size = {size} color = {color}/>;
                },
                    
                
            })}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
            />
            <Tab.Screen 
                name="AboutUs" 
                component={AboutUsScreen} 
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};