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
            <Image style={styles.top} source={require('../assets/TopAccept.png')}/>
            <View style={styles.container1}>
                <Animated.Text style={{left:'6%'}}>Tiêu đề</Animated.Text>
                <TextInput value={tieude}  onChangeText={tieude => setTieude(tieude)} style={styles.input}placeholder="Nhập tiêu đề"/>
                <Animated.Text style={{left:'6%'}}>Chủ nhà</Animated.Text>
                <TextInput value={chunha} onChangeText={chunha => setChunha(chunha)} style={styles.input}placeholder="Nhập tên chủ nhà"/>
                <Animated.Text style={{left:'6%'}}>Số điện thoại liên hệ</Animated.Text>
                <TextInput value={sdt} onChangeText={sdt => setSdt(sdt)} style={styles.input}placeholder="Nhập số điện thoại"/>
                <Animated.Text style={{left:'6%'}}>Mô tả chi tiết</Animated.Text>
                <TextInput value={mota}  onChangeText={mota => setMota(mota)} style={styles.input1}placeholder="Mô tả"/>
            </View>
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
    container: {
        flex : 1,
        flexDirection : 'column',
        justifyContent :'center',
        alignItems : 'center',
        justifyContent :'center',
        backgroundColor: 'white',
    },
    container1: {
        marginBottom:50
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:300
    },
    input1: {
        height: 150,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:300
        
    },
    top: {
        justifyContent :'center',
        alignItems : 'center',
        justifyContent :'center',
        resizeMode:"contain",
        width:250,
        marginTop:5,
        marginBottom:40
    },
    delets: {
        justifyContent :'center',
        alignItems : 'center',
        justifyContent :'center',
        marginTop:5,
        marginBottom:10
    }
})