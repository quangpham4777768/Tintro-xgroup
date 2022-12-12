import React,{useState , useEffect} from "react";
import {Text,View,StyleSheet,TextInput,Image} from 'react-native';
import Animated from 'react-native-reanimated';
export default function Payment(props){
    const [text,setText]= useState("");

    return (
    <View style={styles.container}>
            <Image style={styles.delets} source={require('../assets/wifi.png')}/>
            <Animated.Text>{props.type}</Animated.Text>
            <Animated.Text>{props.date}</Animated.Text>
            <Animated.Text>Số thẻ</Animated.Text>
            <TextInput value={text} onChangeText={text => setText(text)} style={styles.input}placeholder="5300 0000 0000 0000"/>
            <Animated.Text>Tên người đăng ký</Animated.Text>
            <TextInput value={text} onChangeText={text => setText(text)} style={styles.input}placeholder="Nguyễn văn A"/>
            <Animated.Text>Ngày hết hạn</Animated.Text>
            <TextInput value={text} onChangeText={text => setText(text)} style={styles.input}placeholder="4/12/2020"/>
            <Image style={styles.delets} source={require('../assets/delete.png')}/>
            <Image style={styles.delets} source={require('../assets/delete.png')}/>

    </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection : 'column',
        justifyContent :'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
})