import React,{useState} from "react";
import { View, Text,Button,StyleSheet, Image ,TextInput,TouchableOpacity,Switch, Alert,KeyboardAvoidingView} from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function RegisterScreen(props){
    
    const navigation = useNavigation();

    const [number, setNumber] = useState({value: '', error: ''});
    const [password, setPassword] = useState({value: '', error: ''});

    const numberValidator = (number) =>{
      if (!number || number.length >= 10) return Alert('Số điện thoại không hợp lệ.') ;

      return '';
    };
    const passwordValidator = (password) =>{
        if (!password || password.length <= 8) return 'Mật khẩu không hợp lệ.';

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

    
        navigation.navigate('Scanner');
    };



    return(
        <KeyboardAvoidingView>
            <View style ={styles.container} >
                <View style={{backgroundColor:'#5265FF',width:'100%',height:60,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.tx}> ĐĂNG KÝ TÀI KHOẢN</Text>
                </View>
                
                <View style={{ width:'80%',height:500,alignItems:'center',justifyContent:'center'}}>
                    <Text style={styles.tx}> Bạn đã hoàn tất quá trình đăng ký 
                        Chúc bạn có những trải nhiệm tuyệt với với ứng dụng của chúng tôi</Text>
                </View>
           
                <View style ={{ width : '70%',height:60 ,marginTop :'5%' }}  >
                    <Button  title="Đăng nhập" onPress={() => navigation.navigate('Login')}/>
                </View>

            </View>
        </KeyboardAvoidingView>
        
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        backgroundColor: '#FFFFFF',
        paddingTop:'10%',
        
    },
    tinyLogo: {
        width : '50%',
        resizeMode: 'center',

    },
    tx:{

        fontWeight: 'bold',
        fontSize : 20,

    },

    input: {
        width: '80%',
        height: 48,
        padding: 10,
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
        paddingStart : '10%',
        fontSize:17,

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
        alignItems :'stretch',
        marginBottom : '10%',
        width:'100%',
        height:20,
        paddingStart:'10%'
    },
    link: {
        fontWeight: 'bold',
        color:'red',
        textDecorationLine: 'underline'

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})

