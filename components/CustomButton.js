import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const CustomButton = (props) => {
    return (
        <View style={styles.buttonStyle}>
            <Button title={props.title} onPress={props.onPressHandler} color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "green",
        borderRadius: 5,
        paddingHorizontal: 20,
        margin: 5
    },
});

export default CustomButton;