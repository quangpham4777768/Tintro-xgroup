import React,{useState , useEffect} from "react";
import {View,StyleSheet,TextInput,Image,TouchableOpacity,Text} from 'react-native';
import Animated from 'react-native-reanimated';

export default function UploadImage({ navigation }){
    return (
        <View style={styles.container}>
            <Image style={styles.top} source={require('../assets/TopImage.png')}/>
            <View style={styles.container1}>
                <TouchableOpacity onPress={()=>navigation.navigate("Accept") }>
                    <Image style={styles.add} source={require('../assets/add.png')}/>
                    <View style={styles.container2}>
                        <Text>Thêm ảnh vào bài đăng</Text>
                        <Text>Bạn được thêm tối đa 5 ảnh</Text>
                    </View>
                </TouchableOpacity>
            </View>
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
    container: {
        flex : 1,
        flexDirection : 'column',
        justifyContent :'center',
        alignItems : 'center',
        justifyContent :'center',
        backgroundColor: 'white',
        marginTop:'-10%'
    },
    container1: {
        justifyContent :'center',
        alignItems : 'center',
        justifyContent :'center',
        marginTop:5,
        marginBottom:10
    },
    container2: {
        justifyContent :'center',
        height: 350,
        alignItems : 'center',
        justifyContent :'center',
        borderColor: '#A6A6A6',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 40
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:300
    },
    delets: {
        justifyContent :'center',
        alignItems : 'center',
        justifyContent :'center',
        marginTop:5,
        marginBottom:10
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
    add: {
        marginRight: 200
    }
})