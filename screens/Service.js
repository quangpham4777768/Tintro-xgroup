import React ,{useEffect} from "react";
import { View, Text,Button,StyleSheet, Image,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
// import { Navigation } from 'swiper';
import {useState} from 'react'
import Swiper from 'react-native-swiper/src';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Animated from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Service(){
    const navigation = useNavigation();
        useEffect(() => {
        AsyncStorage.getItem("user").then((userid)=>
        axios.get('https://backend-production-56ee.up.railway.app/api/getAllAprtmentUser/?id='+userid).then((response) => {
            const res = response.data;
            setService(res);
            Setuse(userid);
            for (var i=0; i < res.length; i++) {
                serid=userid;
                if(res[i].type==="Đăng ký wifi")
                    setWifi(1);
            }
          })
      )});
      const [use,Setuse]=useState(0);
    const current = new Date();
    const currentdate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const nextdate = `${current.getDate()}/${(current.getMonth()+2)%12}/${current.getFullYear()}`;
    const [service,setService]=useState([]);
    const [wifi,setWifi]=useState(0);
    const getSelectedDayEvents = date => {
        navigation.navigate("Payment",{types:"Đăng kí dọn phòng",date:date,image:require('../assets/Clean.png')})    
    };
    return(
        <View style ={styles.container}>
            <View>
                <Swiper
                    showsButtons loop={true} showsPagination={false} style={styles.wrapper} 
                    buttonWrapperStyle={{
                        top:'-43%'
                    }}
                >
                    <View style={styles.slide1}>
                    <Text style={styles.text}>Đăng ký wifi</Text>
                        { wifi ==0 &&
                        <View >
                            <View style={styles.float}>
                                <TouchableOpacity onPress={()=>{navigation.navigate("Payment",{types:"Đăng ký wifi",user:use,date:currentdate+"-"+nextdate,image:require('../assets/wifi.png')})}}>
                                        <Image style={{marginLeft:'37%',marginTop:'10%'}}source={require('../assets/register.png')}/> 
                                </TouchableOpacity>
                            </View>
                            <Image top='35%' source={require('../assets/wifi.png')}/>
                        </View>}
                        { wifi ==1 &&
                            <View>
                                <Animated.Text
                                style={{
                                    color: 'black',
                                    textAlign:'center',
                                    width:'100%',
                                    height:'30%',
                                    paddingTop: '5%',
                                    backgroundColor:"#E9ECFF",
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    borderBottomLeftRadius: 20,
                                    borderBottomRightRadius: 20,
                                    paddingLeft: 80,
                                    paddingRight:80,
                                    fontSize: 36,
                                    marginTop: 20
                                }}>
                                44448888
                                </Animated.Text>
                                <Animated.Text
                                style={{
                                    color: 'black',
                                    fontSize: 12,
                                    marginTop:10
                                }}>
                                30/9/2022 - 30/10/2022
                                </Animated.Text>
                                <View top='5%' left='57%'>
                                <TouchableOpacity onPress={()=>setWifi(0)}>
                                    <Image  source={require('../assets/cancel.png')} />
                                </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Dịch vụ giữ xe</Text>
                        {service.map((props)=>{
                            if(props.type=="Đăng ký giữ xe")
                            return(
                                <View marginTop='0%'>
                                    <Animated.Text
                                        style={{
                                            color: 'black',
                                            fontSize: 16,
                                            marginTop:10,
                                            fontWeight:"400"
                                        }}>
                                    {props.name}
                                    </Animated.Text>
                                    <View style={{
                                    backgroundColor:"#E9ECFF",
                                    borderRadius: 15,
                                    height: '38%',

                                }}>
                                    <Image source={require('../assets/leftcar.png')}/>
                                    {props.vefried?<Text style={styles.textdate}>{props.day1} - {props.day2}</Text>:<Text style={styles.textdate}>Chưa đăng ký dịch vụ</Text>}
                                    {props.vefried?<Image source={require('../assets/check.png')} style={styles.check}/>:<Image source={require('../assets/uncheck.png')} style={styles.check}/>}
                                    {props.vefried?<Text style={styles.word}>Đã duyệt</Text>:  <Text style={styles.word}>Chưa duyệt</Text>}
                                    <Image style={styles.space} source={require('../assets/space.png')}/>
                                    </View>
                                    
                                    {!props.car.veri?
                                    <TouchableOpacity onPress={()=>{navigation.navigate("Payment",{types:"Đăng kí giữ xe",car:props.car,date:currentdate+"-"+nextdate,image:require('../assets/car.png')})}}>
                                        <Image marginTop='2%' source={require('../assets/register.png')}/> 
                                    </TouchableOpacity>:
                                    <TouchableOpacity onPress={()=>axios.post('https://backend-production-56ee.up.railway.app/api/car?userid='+props.car.user.id,{
                                        id:props.car.id,
                                        name:props.car.name,
                                        status:props.car.status,
                                        user:props.car.user,
                                        veri:0
                                      }).then((response) => {
                                  })}>
                                        <Image marginTop='2%' source={require('../assets/cancel.png')} />
                                    </TouchableOpacity>}
                                    <View style={{marginTop: '-40%'}}></View>
                                </View>
                            )
                        })}

                
                    </View>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Đăng ký dọn phòng</Text>
                        <Calendar
                    style={{ height: 300, width: "100%", justifyContent: "center", marginTop: '15%'}}
                    markingType={'custom'}
                    theme={{
                        backgroundColor: "#ffffff",
                        calendarBackground: "#ffffff",
                        todayTextColor: "#57B9BB",
                        dayTextColor: "#222222",
                        textDisabledColor: "#d9e1e8",
                        monthTextColor: "#57B9BB",
                        arrowColor: "#57B9BB",
                        textDayFontWeight: "300",
                        textMonthFontWeight: "700",
                        textDayHeaderFontWeight: "500",
                        textDayFontSize: 16,
                        textMonthFontSize: 18,
                        selectedDayBackgroundColor: "#57B9BB",
                        selectedDayTextColor: "white",
                        textDayHeaderFontSize: 12,
                        backgroundImage: `url(../assets/calendarSpace.png})`
                    }}
                    minDate={"1996-05-10"}
                    maxDate={"2030-05-30"}
                    monthFormat={"MMMM yyyy "}
                    scrollEnabled={true}
                    horizontal={true}
                    showScrollIndicator={true}
                    onDayPress={day => {
                        getSelectedDayEvents(day.dateString);
                    }}
                        markedDates={{
                            '2022-12-16': {      
                                customStyles: {
                                container: {
                                  backgroundColor: '#A6FF34',
                                },
                                text: {
                                  color: 'white',
                                  fontWeight: 'bold'
                                }
                              }},
                        }}
                        />
                    </View>
                </Swiper>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent :'center',
        backgroundColor:'white'
    },
    swipe:{
        alignItems : 'center',
        justifyContent :'center',
        backgroundColor:'white'
    },
    slide1: { flex: 1, alignItems: 'center',textAlign:'center',        background:'white'
    },
    text: {
    color: '#0a0a0a', fontSize: 25, fontWeight: 'bold'
    }
    ,wrapper:{
        top:'5%',
    },
    resgiter:{
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    lines:{
        alignItems:'space-between'
    },
    float:{
        display:'flex',
        width:'100%'
    },
    half:{
        position:'absolute',
        top:'100%',
        left:'0%',
        color: '#0a0a0a', fontSize: 14, fontWeight: 'bold'
    },
    password:{
        alignItems : 'center',
        justifyContent :'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },textdate:{
        position:"relative",
        top: '-66%',
        left: '27%'
    },
    check:{
        position:"relative",
        top: '-60%',
        left: '55%'
    },word:{
        position:"relative",
        top: '-85%',
        left: '62%'
    },
    space:{
        top: '-45%'
    },
    delets:{
        left:'95%',
        top:'-150%'
    }
})
