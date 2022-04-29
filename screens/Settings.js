import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Settings = () => {
    return (
        <View style={ styles.container }>
            <View style={ styles.greytop }></View>
            <View style={ styles.titlediv }>
                
                <Text style={ styles.title }>Settings</Text>
            </View>
            <View style={ styles.picdiv }>
                <Image source={} style={ styles.pic } />
            </View>
        </View>
    )   
}

export default Settings

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },  
    greytop: {
        width: '100%',
        backgroundColor: 'grey',
        height: '3.8%'
    },
    titlediv: {
        width: '100%',
        height: '5.7%',
        backgroundColor: 'darkorange',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    picdiv: {
        backgroundColor: 'orange',
        height: '17.5%'
    }
});
