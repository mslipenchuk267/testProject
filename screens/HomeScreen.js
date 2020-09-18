import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { CommonActions } from '@react-navigation/native';

import CustomButton from '../components/CustomButton';
import * as userActions from '../store/actions/user';
const HomeScreen = (props) => {
    const userName = useSelector(state => state.user.userName)
    const value = useSelector(state => state.user.value)
    const dispatch = useDispatch();


    const addButtonHandler = () => {
        dispatch(userActions.incrementValue())
    }

    const subtractButtonHandler = () => {
        dispatch(userActions.decrementValue())
    }

    const resetButtonHandler = () => {
        dispatch(userActions.resetValue())
    }

    const profileButtonHandler = () => {
        props.navigation.dispatch(
            CommonActions.navigate({ name: "Profile" })
        );
    }

    const usernameButtonHandler = () => {
        dispatch(userActions.setUserName("John"));
    }

    const resetUserNameButtonHandler = () => {
        dispatch(userActions.resetUserName())
    }

    return (
        <View
            style={styles.container}
        >
            <Text style={styles.valueText} >{value}</Text>
            <Text style={styles.valueText} >Name: {userName}</Text>
            <CustomButton title="Add" onPressHandler={addButtonHandler} />
            <CustomButton title="Subtract" onPressHandler={subtractButtonHandler} />
            <CustomButton title="Reset" onPressHandler={resetButtonHandler} />
            <CustomButton title="Profile" onPressHandler={profileButtonHandler} />
            <CustomButton title="Set User Name" onPressHandler={usernameButtonHandler} />
            <CustomButton title="Reset User Name" onPressHandler={resetUserNameButtonHandler} />
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
    valueText: {
        fontFamily: "Helvetica",
        fontWeight: "bold",
        fontSize: 24
    }
});

export default HomeScreen;