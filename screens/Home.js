import React from 'react'
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import PosturizeLogo from '../image/Posturize-logos_transparent_borderless.png';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={PosturizeLogo} style={styles.image} />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
              <Text style={styles.text} >Straighten up!</Text>
            </TouchableOpacity>
            {/*
            <Button
            title="Go to Dashboard"
            onPress={() => navigation.navigate('Dashboard')}
            />
            */}
        </View>
    );
};
    
export default HomeScreen;

const styles = StyleSheet.create({
  image: {
      height: '83%',
      width: '100%',
      resizeMode: 'contain'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: "90%",
    height: '8%',
    borderRadius: 10,
    fontWeight: 'bold'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
});