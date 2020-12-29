import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect,AsyncStorage} from 'react';
import { StyleSheet, Text,FlatList, View, Button,Alert } from 'react-native';

import GoalInput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';


export default function App() {
 
 const [courseGoal, setCourseGoal] = useState([]);
 const [isAddMode, setIsAddMode] = useState(false);

 const addGoalHandler = goalTitle=>{
     setCourseGoal(currentGoal => [...currentGoal, {id: Math.random().toString(), value: goalTitle}]);
     setIsAddMode(false);
 };

 const removeGoalHandler = goalId =>{
   setCourseGoal(currentGoal => {
     return currentGoal.filter((goal)=> goal.id !== goalId);
   });
 };

 const cancelGoal = () =>{
   setIsAddMode(false);
 };
 
  return (
    <View>
      <View style={styles.container}>
        <Text style={{fontSize:20, fontStyle:"normal", fontWeight:"bold", color:"blue"}}> TO-DO LIST </Text>
      </View>
      
      <View>
      <Button title="ADD NEW GOAL" color="#dda0dd" onPress={()=>setIsAddMode(true)}/>    
      </View> 

      <GoalInput visible={isAddMode} onAddGoal ={addGoalHandler} onCancel={cancelGoal}/>         
        <FlatList
          keyExtractor={(item,index) => item.id}
          data={courseGoal}
          renderItem={itemData => <GoalItem id ={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />       
                   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:50,
    backgroundColor: 'white',
    alignItems: 'center',
    //justifyContent: 'center',
  
  },
  parent:{
    backgroundColor:"#ffdab9"
  }
  

});
