import React,{useState , useEffect} from "react";
import {View,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

export default function UploadImage({ navigation }){
    const [tinh,setTinh]= useState("");
    const [huyen,setHuyen]= useState("");
    const [xa,setXa]= useState("");
    const [sonha,setSonha]= useState("");
    return (
        <View style={styles.container}>
            <Image style={styles.delets} source={require('../assets/TopImage.png')}/>
            <TextInput value={tinh}  onChangeText={tinh => setTinh(tinh)} style={styles.input}placeholder="Nhập Tỉnh/TP"/>
            <Animated.Text style={{left:'-21%'}}>Chọn Tỉnh/TP</Animated.Text>
            <TextInput value={huyen} onChangeText={huyen => setHuyen(huyen)} style={styles.input}placeholder="Nhập Quận/Huyện"/>
            <Animated.Text style={{left:'-25%'}}>Chọn Quận/Huyện</Animated.Text>
            <TextInput value={xa} onChangeText={xa => setXa(xa)} style={styles.input}placeholder="Nhập Phường/Xã"/>
            <Animated.Text style={{left:'-25%'}}>Chọn Phường/Xã</Animated.Text>
            <TextInput value={sonha}  onChangeText={sonha => setSonha(sonha)} style={styles.input}placeholder="Nhập số nhà, tên đường"/>
            <Animated.Text style={{left:'-21%'}}>Số nhà, tên đường</Animated.Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Accept") }>
            <Image style={styles.delets} source={require('../assets/Tieptheo.png')}/>
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
        justifyContent :'center'
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