import React from 'react'
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Signup = () => {
  return (
    <View style={styles.outsideContainer} >
        <View style={styles.container} >

        </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
    outsideContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white'
    },
    container: {
        width: '94%'
    }
})