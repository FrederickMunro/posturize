import React, {useState, useRef, useEffect} from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, Pressable, KeyboardAvoidingView, TouchableOpacity, Keyboard} from 'react-native'
import { ProgressCircle } from 'react-native-svg-charts'
import Exercise from '../components/Exercise';

// Notifications

import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import * as Device from 'expo-device';
import * as Permissions from 'expo-permissions';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

const DashboardScreen = ({ navigation }) => {
    const demoUserName = 'Jason';
    var userPostureValue = 5; // TODO: This is just an example, should fetch this value from board
    var userProgress = 0.7;

    const [userPosture, setUserPosture] = useState(userPostureValue);

    useEffect(() => {
        if(userPostureValue === 5){
            schedulePushNotification();
            }
            }, [userPosture]);

    function isUserInGoodPosture() {
        if (userPostureValue > 4) {
            return "correct";
        }
        return "incorrect";
    }
    // Exercises 
    const [exercise, setExercise] = useState();
    const [exerciseItems, setExerciseItems] = useState(['Take a walk', 'Stretch', 'Stand']);

    const handleAddExercise = () => {
        Keyboard.dismiss();
        setExerciseItems([...exerciseItems, exercise])
        setExercise(null);
      }
    
      const completeExercise = (index) => {
        let itemsCopy = [...exerciseItems];
        itemsCopy.splice(index, 1);
        setExerciseItems(itemsCopy)
      }

      // Notifications 
      const [expoPushToken, setExpoPushToken] = useState('');
      const [notification, setNotification] = useState(false);
      const notificationListener = useRef();
      const responseListener = useRef();
    
      useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
          setNotification(notification);
        });
    
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log(response);
        });
    
        return () => {
          Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
        };
      }, []);
      
    return (
        <ScrollView style={styles.page}>
            <Text style={styles.sectionTitle}>Hi {demoUserName}</Text>
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.text}>Go to your profile</Text>
                </Pressable>
            </View>
            <Text>{"\n"}</Text>
            <Text style={styles.sectionTitle}>Good posture time</Text>
            <View style={styles.container}>
                <Text style={styles.text}>You are currently in {isUserInGoodPosture()} posture{"\n"}</Text>
                <Text style={styles.text}>You have been in good posture {userProgress*100}% of time today! {"\n"}</Text>
                <ProgressCircle style={{ height: 200 }} progress={userProgress} progressColor={'orange'}/>
                <Text style={styles.text}>View Weekly Report{"\n"}</Text>
            </View>
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
        padding: 10,
        fontFamily: 'Avenir',
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
        fontWeight: 'bold',
        fontFamily: 'Avenir',
      },
  });

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "You've got mail! 📬",
        body: 'Here is the notification body',
        data: { data: 'goes here' },
      },
      trigger: { seconds: 2 },
    });
  }
  
  async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        alert('Failed to get push token for push notification!');
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      alert('Must use physical device for Push Notifications');
    }
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  
    return token;
  }