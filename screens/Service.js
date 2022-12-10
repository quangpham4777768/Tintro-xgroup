import React from "react";
import { View, Text,Button,StyleSheet, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import {useState} from 'react'
import 'swiper/css/navigation';
import 'swiper/css';
export default function Service(){
    const navigation = useNavigation();
    const [page,setPage]=useState(1);
    const [wifi,setWifi]=useState(0);
    return(
        <View style ={styles.container}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={styles.swipe}
            >
                <SwiperSlide index="1">Đăng ký wifi</SwiperSlide>
                <SwiperSlide index="2">Đăng ký gửi xe</SwiperSlide>
                <SwiperSlide index="3">Đăng ký dọn phòng</SwiperSlide>
            </Swiper>
            { page==1 &&
                <View>
                
                </View>
            }
            { page==2 && wifi ==0 &&
                <View>
                    <View>
                        <Text>Chưa đăng ký dịch vụ Wifi</Text>
                        <Button>Đăng ký</Button>
                    </View>
                    <Image style={styles.tinyLogo} source={require('@expo/snack-static/react-native-logo.png')}/>
                </View>
            }
            { page==2 && wifi ==1 &&
                <View>
                    <Text>44448888</Text>
                    <Text>30/9/2022 - 30/10/2022</Text>
                    <Button>Hủy gia hạn</Button>
                </View>
            }
            { page==3 &&
                <View>
                </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent :'center'
    },
    swipe:{
        alignItems : 'center',
        justifyContent :'center'
    }
})
