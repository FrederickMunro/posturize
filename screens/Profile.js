import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import ProfilePic from '../image/profile_pic.png';
import Back from '../image/left-arrow.png';

const Settings = ({ navigation }) => {

  const [username, setUsername] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <View style={ styles.container }>
      <View style={ styles.greytop }></View>
      <View style={ styles.titlediv }>
        <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Dashboard')} >
          <Image source={Back} style={ styles.back } />
        </TouchableOpacity>
        <Text style={ styles.title }>Settings</Text>
        <View style={ styles.empty }></View>
      </View>
      <View style={ styles.picdiv }>
        <Image source={ProfilePic} style={ styles.pic } />
      </View>
      <View style={ styles.label }>
        <Text style={ styles.beforeLabel }>Profile</Text>
      </View>
      <View style={ styles.inputDiv }>
        <Text style={ styles.inputLabel } >Username</Text>
        <TextInput value={username} placeholder={'username'} style={styles.input} onChangeText={setUsername} />
      </View>
      <View style={ styles.inputDiv }>
        <Text style={ styles.inputLabel } >First Name</Text>
        <TextInput value={firstName} placeholder={'firstName'} style={styles.input} onChangeText={setFirstName} />
      </View>
      <View style={ styles.inputDiv }>
        <Text style={ styles.inputLabel } >Last Name</Text>
        <TextInput value={lastName} placeholder={'lastName'} style={styles.input} onChangeText={setLastName} />
      </View>
      <View style={ styles.inputDiv }>
        <Text style={ styles.inputLabel } >Email</Text>
        <TextInput value={email} placeholder={'email'} style={styles.input} onChangeText={setEmail} />
      </View>
      <View style={ styles.label }>
        <Text style={ styles.beforeLabel }>Account</Text>
      </View>
      <View style={ styles.inputDiv }>
        <Text style={ styles.inputLabel } >ChangePassword</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        alignSelf: 'center'
    },
    picdiv: {
        backgroundColor: 'orange',
        height: '17.5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pic: {
      height: 100,
      width: 100,
      borderRadius: 50
    },
    inputDiv: {
      width: '100%',
      height: '7.5%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 20,
      paddingRight: 20,
      marginBottom: 1
    },
    inputLabel: {
      fontSize: 18
    },
    input: {
      fontSize: 15,
      color: 'grey'
    },
    label: {
      height: '7%',
      display: 'flex',
      justifyContent: 'center'
    },
    beforeLabel: {
      fontSize: 17,
      paddingLeft: 20,
      color: 'grey'
    },
    back: {
      width: 15,
      height: 15,
      paddingLeft: 10
    },
    empty: {
      width: 10
    }
});