import React,{useState , useEffect} from "react";
import {Text,View,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';
export default function Payment( {navigation, route} ){
    const [text,setText]= useState("");
    const [name,setName]= useState("");
    const [date,setDate]= useState("");
    return (
    <View style={styles.container}>
            <Image style={styles.delets} source={route.params.image}/>
            <Animated.Text style={{fontWeight:'bold',marginTop:5}}>{route.params.types}</Animated.Text>
            <Animated.Text style={{fontWeight:'bold' ,marginTop:5}}>{route.params.date}</Animated.Text>
            <Animated.Text style={{left:'-31%',marginTop:5}}>Số thẻ</Animated.Text>
            <TextInput value={text}  onChangeText={text => setText(text)} style={styles.input}placeholder="5300 0000 0000 0000"/>
            <Animated.Text style={{left:'-21%'}}>Tên người đăng ký</Animated.Text>
            <TextInput value={name} onChangeText={text => setName(text)} style={styles.input}placeholder="Nguyễn văn A"/>
            <Animated.Text style={{left:'-25%'}}>Ngày hết hạn</Animated.Text>
            <TextInput value={date} onChangeText={text => setDate(text)} style={styles.input}placeholder="4/12/2020"/>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image style={styles.delets} source={require('../assets/XacNhan.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.goBack() }>
            <Image style={styles.delets} source={require('../assets/Huy.png')}/>
            </TouchableOpacity>

    </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection : 'column',
        justifyContent :'center',
        alignItems : 'center',
        justifyContent :'center',
        backgroundColor: 'white',
        marginTop:'-40%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:300
      },
      delets:{
        justifyContent :'center',
        alignItems : 'center',
        justifyContent :'center',
        marginTop:5
      }
})