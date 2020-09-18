import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/native';

import CustomButton from '../components/CustomButton';

const ProfileScreen = (props) => {
    const userName = useSelector(state => state.user.userName)

    const homeButtonHandler = () => {
        props.navigation.dispatch(
            CommonActions.navigate("Home")
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textStyle} >Hi this is {userName}</Text>
            <CustomButton title="Home" onPressHandler={homeButtonHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    textStyle: {
        fontFamily: "Helvetica",
        fontSize: 20
    }
});

export default ProfileScreen;