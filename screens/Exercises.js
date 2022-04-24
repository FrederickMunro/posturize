import React, {useState} from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button, Pressable, KeyboardAvoidingView, TouchableOpacity, Keyboard} from 'react-native'
import Exercise from '../components/Exercise';
const ExerciseScreen = ({ navigation }) => {


    // Exercises 
    const [exercise, setExercise] = useState();
    const [exerciseItems, setExerciseItems] = useState(['Take a walk', 'Strech', 'Stand']);

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
    return (
        <View style={styles.container}>
        <ScrollView ontentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
                  {/* Today's Exercises */}
                  
            <View style={styles.exercisesWrapper}>
            <Text style={styles.sectionTitle}>Today's exercises</Text>
                <View style={styles.items}>
                {/* This is where the exercises will go! */}
                {
                    exerciseItems.map((item, index) => {
                    return (
                        <TouchableOpacity key={index}  onPress={() => completeExercise(index)}>
                        <Exercise text={item} /> 
                        </TouchableOpacity>
                    )
                    })
                }
                </View>
            </View>
                              {/* Write a exercise */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}

            </ScrollView>
            <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeExerciseWrapper}
        >
          <TextInput style={styles.input} placeholder={'Write an exercise'} value={exercise} onChangeText={text => setExercise(text)} />
          <TouchableOpacity onPress={() => handleAddExercise()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        </View>
        
    );
};
    
export default ExerciseScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff2',
  },
  exercisesWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeExerciseWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});