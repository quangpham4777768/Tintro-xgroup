import React,{useState , useEffect} from "react";
import {Text,View,StyleSheet,Button,Linking, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Car(props){
    return (
    <View style={styles.container}>
        <Text>{props.name}</Text>
        <View>
            <Image source={require(props.image)}></Image>
            <View>
                <Icon name="calendar" size={30} color="#900" />
                <Text>{props.day1} <Icon name="arrow-long-right" size={30} color="#900" /> {props.day2}</Text>
            </View>
        </View>
    </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection : 'column',
        justifyContent :'center'
    }
})