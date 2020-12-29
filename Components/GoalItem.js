import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GoalItem = props =>{
    return(
            
            <View style={styles.listItem}>
                <Text style={{fontSize:18}}>
                    {props.title}
                </Text>
                <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
                    <Ionicons
                    name={'md-trash'}
                    size={32}
                    color="red"
                />
                </TouchableOpacity>
                
            </View>
            
    );
};

const styles = StyleSheet.create({
    listItem:{
        borderWidth:1,
        borderRadius: 10,
        flexDirection:"row",
        margin:10,
        borderColor:"black",
        marginVertical:5,
        marginTop:10,
        justifyContent:"space-between",
        padding:10,
        backgroundColor:"#ffe4b5",

    },
});

export default GoalItem;