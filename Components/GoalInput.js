import React, { useState } from 'react';
import {TextInput,Modal, Button, View, StyleSheet, TouchableOpacity} from 'react-native';


const GoalInput = props =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    
    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = ()=>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return(
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.list}
                placeholder="Your Goal"
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <View style={styles.button}>
                <View style={styles.newButton}>
                    <Button title="Add Goal" color="#dda0dd" onPress={addGoalHandler}/>
                </View>
                <View style={styles.newButton}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel}/>
                </View>
            </View>
        </View>       
        </Modal>
    )

};

const styles = StyleSheet.create({
    list:{
        padding:10,
        borderColor:"black",
        borderWidth: 1,
        width:"80%",
        fontSize:18,    
        margin:10    
      },
      inputContainer:{
          flex:1,
          justifyContent:"center",
          alignItems:"center"
      },
      button:{
        flexDirection:"row",
        justifyContent:"space-between",
        width: '60%'
      },
      newButton:{
          width:'40%'
      }
});

export default GoalInput;