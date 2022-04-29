import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, Pressable, KeyboardAvoidingView, TouchableOpacity, Keyboard} from 'react-native'
import { ProgressCircle } from 'react-native-svg-charts'
import Exercise from '../components/Exercise';
import { Notifications } from 'expo';

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";



const DashboardScreen = ({ navigation }) => {

    const [response, setResponse] = useState("");

    useEffect(() => {
      const socket = socketIOClient(ENDPOINT);
      socket.on("fromarduino", data => {
        setResponse(data);
      });
    }, []);
 
    const demoUserName = 'Jason';
    var userProgress = 0.7;

    // Exercises 
    const [exercise, setExercise] = useState();
    const [exerciseItems, setExerciseItems] = useState(['Take a walk', 'Stretch', 'Stand']);
  



    return (
        <ScrollView style={styles.page}>
            <Text style={styles.sectionTitle}>Hi {demoUserName}</Text>
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.text}>Go to your profile</Text>
                </Pressable>
            </View>
            <Text>{"\n"}</Text>
            <Text style={styles.sectionTitle}>Current Posture</Text>
            <Pressable style={styles.container}>
            <Text style={styles.sectionTitle}>Your position is:{demoUserName}</Text>
            </Pressable>
            <Text style={styles.sectionTitle}>Good posture time</Text>
            <Pressable style={styles.container} onPress={() => navigation.navigate('Charts')}>
                <Text style={styles.textStyle}>You have been in good posture {userProgress*100}% of time today! {"\n"}</Text>
                <ProgressCircle style={{ height: 200 }} progress={userProgress} progressColor={'orange'}/>
            </Pressable>
            
            <Text style={styles.percentage}>
                {userProgress*100}%
            </Text>
                  {/* Today's Exercises */}
                  <Text style={styles.sectionTitle}>Today's exercises</Text>
            <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Exercises')}>
                <Text style={styles.text}>Add exercises to your day!</Text>
            </Pressable>
            </View>
            </ScrollView>
            
        
    );
};
    
export default DashboardScreen;
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#eceff2',
        paddingTop: 50,
        padding: 10
    },
    percentage : {
        position: 'relative',
        left:160,
        top: -150,
        fontSize: 30,
        fontStyle: 'italic',
        color: 'orange',
        fontWeight: 'bold',
    },
    textStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#373E4E'
    },
    image: {
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        height: 150,
        resizeMode: 'contain'
      },
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 5.84,
        elevation: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        paddingVertical: 8,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
      },
    text: {
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
      },
      sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold'
      },
  });