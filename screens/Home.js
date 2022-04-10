import React from 'react'
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button} from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}> 
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
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });