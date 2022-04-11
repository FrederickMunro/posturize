import React from 'react'
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button} from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../image/Posturize-logos_black.png')} style={styles.image}/> 
            <Text>Welcome to Posturize!</Text>
            <Button
            title="Go to User Profile"
            onPress={() => navigation.navigate('Profile')}
            />
        </View>
    );
};
    
export default HomeScreen;
const styles = StyleSheet.create({
    image: {
        padding: 20,
        borderRadius: 15,
        marginBottom: 20,
        textAlign: 'center',
        height: 150,
        resizeMode: 'contain'
      },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "Poppins-Bold",
    },
  });