import React from 'react'
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, Pressable} from 'react-native'

const DashboardScreen = ({ navigation }) => {
    const demoUserName = 'Jason';
    return (
        <ScrollView style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.text}>Hi {demoUserName},</Text>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.text}>Check profile</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};
    
export default DashboardScreen;
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#eceff2',
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
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 5.84,
        elevation: 1,
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
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'black',
      },
  });