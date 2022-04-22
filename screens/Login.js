import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [badLogin, setBadLogin] = React.useState(false);

    const isBadLogin = () => {
        if (badLogin) {
            return <Text style={styles.error}>Information does not match a registered account</Text>
        }
    }

    const login = () => {
        if (email.toLowerCase() === 'admin@gmail.com' && password === 'admin') {
            navigation.navigate('Dashboard');
        } else {
            setBadLogin(true);
        }
    }

    return (
        <View style={styles.outsideContainer} >
            <View style={styles.container} >
                <Text style={styles.titleOne}>Sign in to</Text>
                <Text style={styles.titleTwo}>your account</Text>
                <TextInput value={email} placeholder={'Email*'} style={styles.input} onChangeText={setEmail} />
                <TextInput secureTextEntry value={password} placeholder={'Password*'} style ={styles.input} onChangeText={setPassword} />
                { isBadLogin() }
                <TouchableOpacity style={styles.button} onPress={() => login()} >
                    <Text style={styles.text}>Sign in</Text>
                </TouchableOpacity>
                <View style={styles.sign}>
                    <Text>Don't have an account yet? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
                        <Text style={styles.signup} >Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login

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
      height: '14%',
      borderRadius: 10,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18
    },
    sign: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    signup: {
        color: 'blue'
    },
    error: {
        color: 'red'
    }
})