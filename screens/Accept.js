import React,{useState , useEffect} from "react";
import {View,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';
import Animated from 'react-native-reanimated';

export default function Accept({ navigation }){
    const [tieude,setTieude]= useState("");
    const [chunha,setChunha]= useState("");
    const [sdt,setSdt]= useState("");
    const [mota,setMota]= useState("");
    return (
        <View style={styles.container}>
            <Image style={styles.delets} source={require('../assets/TopAccept.png')}/>
            <TextInput value={tieude}  onChangeText={tieude => setTieude(tieude)} style={styles.input}placeholder="Nhập tiêu đề"/>
            <Animated.Text style={{left:'-21%'}}>Tiêu đề</Animated.Text>
            <TextInput value={chunha} onChangeText={chunha => setChunha(chunha)} style={styles.input}placeholder="Nhập tên chủ nhà"/>
            <Animated.Text style={{left:'-25%'}}>Chủ nhà</Animated.Text>
            <TextInput value={sdt} onChangeText={sdt => setSdt(sdt)} style={styles.input}placeholder="Nhập số điện thoại"/>
            <Animated.Text style={{left:'-25%'}}>Số điện thoại liên hệ</Animated.Text>
            <TextInput value={mota}  onChangeText={mota => setMota(mota)} style={styles.input}placeholder=""/>
            <Animated.Text style={{left:'-21%'}}>Mô tả chi tiết</Animated.Text>
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