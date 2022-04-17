import React from 'react'
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native'

function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} style={{ backgroundColor: '#eceff2', paddingTop: 20 }}>
            <TextInput placeholder='First name' placeholderTextColor="#ffffff" style={styles.input}>First name</TextInput>
            <TextInput placeholder='Last name' placeholderTextColor="#ffffff" style={styles.input}>Last name</TextInput>
            <TouchableOpacity
            style={styles.userbutton}>
            <Text style={styles.buttonText}>Update Profile</Text></TouchableOpacity>
      </ScrollView>
    );
  }
  export default ProfileScreen;
  const styles = StyleSheet.create({
    input: {
      width: "90%",
      backgroundColor: `#373E4E`,
      padding: 10,
      marginBottom: 15,
      color: 'white',
      borderWidth: 1,
      borderRadius: 15,
      textAlign: 'center',
      marginLeft: 20
    },
    buttonText: {
      padding: 5,
      color: 'black',
      textAlign: 'center',
      fontSize: 15,
    },
    userbutton: {
      backgroundColor: `#5fb7e3`,
      padding: 10,
      width: "45%",
      marginTop: 5,
      borderRadius: 20,
      borderWidth: 1,
      marginBottom: 40,
      marginLeft: 110
    },
  })