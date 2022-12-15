import React,{useState , useEffect} from "react";
import {View,StyleSheet,TextInput,Image,TouchableOpacity,Pressable,Text,Button, TouchableOpacityBase} from 'react-native';
import Animated from 'react-native-reanimated';

export default function Info({ navigation }){
    const [isPhong,setIsPhong]= useState(true);
    const [gia,setGia]= useState("");
    const [dientich,setDientich]= useState("");

    const [wifi,setWifi]= useState(false);
    const [wc,setWc]= useState(false);
    const [thunuoi,setThunuoi]= useState(false);
    const [time,setTime]= useState(false);
    const [cook,setCook]= useState(false);
    const [air,setAir]= useState(false);
    const [fre,setFre]= useState(false);
    const [wash,setWash]= useState(false);

    const changeType = () => {
        setIsPhong(isPhong => !isPhong)
    }

    const changeStatusWifi = () => {
        setWifi(wifi => !wifi)
    }
    const changeStatusWc = () => {
        setWc(wc => !wc)
    }
    const changeStatusThunuoi = () => {
        setThunuoi(thunuoi => !thunuoi)
    }
    const changeStatusTime = () => {
        setTime(time => !time)
    }
    const changeStatusCook = () => {
        setCook(cook => !cook)
    }
    const changeStatusAir = () => {
        setAir(air => !air)
    }
    const changeStatusFre = () => {
        setFre(fre => !fre)
    }
    const changeStatusWash = () => {
        setWash(wash => !wash)
    }

    return (
        <View style={styles.container}>
            <Image style={styles.top} source={require('../assets/TopInfo.png')}/>
            <View style={styles.container1}>
                <Animated.Text style={{left:'6%'}}>Loại phòng</Animated.Text>
                <View style={styles.container2}>
                    <TouchableOpacity style={ isPhong ? styles.button1 : styles.button1unactive } onPress={() => changeType()}>
                        <Text style={ isPhong ? styles.textactive : styles.text}>Phòng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ isPhong ? styles.button2unactive : styles.button2 } onPress={() => changeType()}>
                        <Text style={ isPhong ? styles.text : styles.textactive }>Căn hộ</Text>
                    </TouchableOpacity>
                </View>
                <Animated.Text style={{left:'6%'}}>Giá phòng (VND)</Animated.Text>
                <TextInput value={gia} onChangeText={gia => setGia(gia)} style={styles.input} placeholder="Nhập Quận/Huyện"/>
                <Animated.Text style={{left:'6%'}}>Diện tích (m2)</Animated.Text>
                <TextInput value={dientich} onChangeText={dientich => setDientich(dientich)} style={styles.input} placeholder="Nhập Phường/Xã"/>
                <Animated.Text style={{left:'6%'}}>Tiện ích phòng</Animated.Text>
                <View style={styles.container3}>
                    <View style={styles.container4}>
                        <TouchableOpacity onPress={() => changeStatusWifi()}>
                            <Image style={ wifi ? styles.iconactive : styles.icon } source={require('../assets/wifi.png')}></Image> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeStatusWc()}>
                            <Image style={ wc ? styles.iconactive : styles.icon } source={require('../assets/wc.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeStatusThunuoi()}>
                            <Image style={ thunuoi ? styles.iconactive : styles.icon } source={require('../assets/thunuoi.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeStatusTime()}>
                            <Image style={ time ? styles.iconactive : styles.icon } source={require('../assets/time.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container4}>
                        <TouchableOpacity onPress={() => changeStatusCook()}>
                            <Image style={ cook ? styles.iconactive : styles.icon } source={require('../assets/cook.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeStatusAir()}>
                            <Image style={ air ? styles.iconactive : styles.icon } source={require('../assets/air.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeStatusFre()}>
                            <Image style={ fre ? styles.iconactive : styles.icon } source={require('../assets/fre.png')}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => changeStatusWash()}>
                            <Image style={ wash ? styles.iconactive : styles.icon } source={require('../assets/wash.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("UploadImage") }>
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
        backgroundColor: 'white'
    },
    container1: {
        marginBottom:1
    },
    container2: {
        marginTop: 13,
        marginBottom: 13,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection : 'row',
    },
    container3: {
        marginTop: 13,
        marginBottom: 13,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent :'center',
        alignItems : 'center',
        justifyContent :'center',
        flexDirection : 'column',
    },
    container4: {
        marginTop: 13,
        marginBottom: 13,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection : 'row',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300
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
    },
    button1: {
        flex: 1,
        height: 55,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderColor: '#5265FF',
        borderWidth: 2,
        backgroundColor: '#5265FF'
    },
    button2: {
        flex: 1,
        height: 55,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: '#5265FF',
        borderWidth: 2,
        backgroundColor: '#5265FF'
    },
    button1unactive: {
        flex: 1,
        height: 55,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        borderColor: '#5265FF',
        borderWidth: 2,
        backgroundColor: 'white'
    },
    button2unactive: {
        flex: 1,
        height: 55,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        borderColor: '#5265FF',
        borderWidth: 2,
        backgroundColor: 'white'
    },
    text: {
        color: '#5265FF'
    },
    textactive: {
        fontWeight: "bold",
        color: 'white'
    },
    icon: {
        marginHorizontal: 13,
        marginVertical: -8,
        resizeMode:"contain",
        width: 45,
    },
    iconactive: {
        marginHorizontal: 13,
        marginVertical: -8,
        resizeMode:"contain",
        width: 45,
        tintColor: "#5265FF"
    }
})