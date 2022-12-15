import React,{useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text,Button,StyleSheet, Image ,TextInput,TouchableOpacity,Switch, Alert} from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
export default function Login(props){
    const storeUser = async (value) => {
        try {
            await AsynStorage.setItem("user", JSON.stringify(value));
          } catch (error) {
            console.log(error);
          }
        };
    const navigation = useNavigation();

    const [number, setNumber] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});

    const Separator = () => (
        <View style={styles.separator} />
    );
    const numberValidator = (number) =>{
        if (!number || number.length >= 10) return Alert('Số điện thoại không hợp lệ.') ;

        return '';
    };
    const passwordValidator = (password) =>{
        if (!password || password.length <= 8) return Alert('Mật khẩu không hợp lệ.');

        return '';
    };
    const _onLoginPressed = () => {
        // const NumberError = numberValidator(number.value);
        // const PasswordError = passwordValidator(password.value);
    
        // if (NumberError || PasswordError) {
        //   setNumber({ ...number, error: NumberError });
        //   setPassword({ ...password, error: PasswordError });
        //   return;
        // }

        axios.post('https://backend-production-56ee.up.railway.app/api/login',{
            phone:number.value,
            password:password.value,
          }).then((response) => {
            const res = response.data.message;
            
            if(res==="Success"){
            const id = response.data.userID;
            AsyncStorage.setItem("user", JSON.stringify(id)).then(
                navigation.navigate("HomePay")
            )}
          });
    };

    return(
        
        <View style ={styles.container}>

            <Image style={styles.tinyLogo} source={require('../assets/sologan.png')} />

            <Text style={styles.tx}>Đăng nhập tài khoản của bạn</Text>

            <Text style={styles.namefunction}>Số điện thoại :</Text>

            <TextInput
                style={styles.input}
                returnKeyType="next"
                value={number.value}
                onChangeText={text => setNumber({ value: text, error: '' })}
                error={!!number.error}
                errorText={number.error}
                autoCapitalize="none"
                autoCompleteType="tel"
                textContentType="telephoneNumber"
                keyboardType="numeric"
            />

            <Text style={styles.namefunction}>Mật khẩu :</Text>

            <TextInput
                returnKeyType="done"
                value={password.value}
                onChangeText={text => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
                style={styles.input}
            />
            
            <View style={styles.row}>
                {/* <View style={styles.rememberMe}>
                    <Switch
                        value={this.state.rememberMe}
                        onValueChange={(value) => this.toggleRememberMe(value)}
                    />
                    <Text>Remember Me</Text>
                </View> */}
                <View style={styles.forgotPassword}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPasswordScreen')}
                    >
                    <Text style={styles.label}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style ={{width : '70%',height:60 , marginBottom: 60 }}  >
                <Button title="Đăng nhập" onPress={_onLoginPressed} />
            </View>


            {/* <Separator />    */}

            <View style={styles.row}>
                <Text>Bạn chưa có tài khoản? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.link}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        justifyContent :'center',
        backgroundColor: '#FFFFFF'
    },
    tinyLogo: {
        paddingBottom : 10,
        resizeMode: "contain",
        backgroundColor: "#ffffff"
    },
    tx:{
        fontWeight: 'bold',
        fontSize : 24,
        marginBottom: 60,
    },
    // loginButton:{
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    // },
    input: {
        width: '70%',
        height: 48,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8',
        borderRadius: 16,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
        paddingEnd : '20%',
    },
    namefunction:{
        width: '100%',
        alignItems: 'flex-start',
        // marginBottom: 24,
        paddingStart : '15%',
    },  
    rememberMe: {
        width: '100%',
        alignItems: 'flex-start',
        marginBottom: 24,
        paddingLeft : '20%',
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    label: {

    },
    link: {
        fontWeight: 'bold',

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})
