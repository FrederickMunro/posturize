import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Signup = ({ navigation }) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatPassword] = React.useState("");

  return (
    <View style={styles.outsideContainer} >
      <View style={styles.container} >
        <Text style={styles.titleOne}>Create an</Text>
        <Text style={styles.titleTwo}>account</Text>
        <TextInput value={email} placeholder={'Email*'} style={styles.input} onChangeText={setEmail} />
        <TextInput value={password} placeholder={'Password*'} style ={styles.input} onChangeText={setPassword} />
        <TextInput value={repeatPassword} placeholder={'Repeat password*'} style={styles.input} onChangeText={setRepeatPassword} />
        <View>
          <Text style={styles.text1}>By signing up on this app, you're also agreeing</Text>
          <View style={styles.text2}>
            <Text> to our </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Terms of Service')} >
                <Text style={styles.tos} >Terms of Service</Text>
            </TouchableOpacity>
            <Text> and </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Privacy Policy')} >
                <Text style={styles.tos} >Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')} >
            <Text style={styles.text}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.sign}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                <Text style={styles.signup} >Sign in</Text>
            </TouchableOpacity>
        </View>
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
        width: '92%'
    },
    titleOne: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    titleTwo: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30
    },
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#D3D3D3',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      width: "100%",
      height: '12%',
      borderRadius: 10,
      fontWeight: 'bold',
      marginBottom: 5
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18
    },
    tos: {
      marginBottom: 20,
      textDecorationLine: 'underline'
    },
    text1: {
      marginLeft: 3,
      marginBottom: 3,
      marginTop: 10
    },
    text2: {
      flexDirection: 'row'
    },
    sign: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    signup: {
        color: 'blue'
    }
})