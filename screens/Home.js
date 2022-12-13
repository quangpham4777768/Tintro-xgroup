import React from "react";
import { View, Text,Button,StyleSheet, ImageBackground,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    return(
        
        <View style ={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require('../assets/icon.png')}
            />
            <Button title="Scan để xem in-tư của bạn bè nào" onPress={()=>navigation.navigate('Scanner')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent :'space-around',
        backgroundColor: '#00000000'
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
})
