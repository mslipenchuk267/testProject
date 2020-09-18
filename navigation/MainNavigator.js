import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const MainStackNavigator = createStackNavigator();

const screenGlobalOptions = {
    
}

export const MainNavigator = () => {
    return(
        <MainStackNavigator.Navigator>
            <MainStackNavigator.Screen 
                name = "Home"
                component={HomeScreen}
                options={screenGlobalOptions}
            />
            <MainStackNavigator.Screen
                name = "Profile"
                component = {ProfileScreen}
                options={screenGlobalOptions}
            />
        </MainStackNavigator.Navigator>
    );
}