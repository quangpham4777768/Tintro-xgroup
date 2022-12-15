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
    return(
        <KeyboardAvoidingView >
            <View style ={styles.container} >
              <View style={{backgroundColor:'#5265FF',width:'100%',height:60,alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.tx}> ĐĂNG KÝ TÀI KHOẢN</Text>
              </View>

              <Image style={styles.tinyLogo} source={require('../assets/Process.png')} />
              
              <View style={{width:'100%',height:20,alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.namefunction}>Số điện thoại :</Text>
              </View>
              

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
                  keyboardType="phone-pad"
              />
              
              <View style={styles.row}>
                  <Text>Nếu chưa nhận được mã </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                      <Text style={styles.link}>hãy nhấn vào đây</Text>
                  </TouchableOpacity>
              </View>

              <View style={{width:'100%',height:20,alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.namefunction}>Mã xác nhận*</Text>
              </View>

              <TextInput
                  returnKeyType="done"
                  value={password.value}
                  onChangeText={text => setPassword({ value: text, error: '' })}
                  error={!!password.error}
                  errorText={password.error}
                  secureTextEntry
                  style={styles.input}
              />
              
            
              <View style ={{width : '70%',height:60 ,marginTop :'5%' }}  >
                <Button  title="Xác nhận" onPress={() => navigation.navigate('PassCreated')}/>
              </View>

              <View style ={{width : '70%',height:60 , marginBottom: 60 }}  >
                  <TouchableOpacity  >
                    <Button color='red' title="Hủy đăng ký" onPress={() => navigation.navigate('Login')}/>
                  </TouchableOpacity>
              </View>

             </View>
        </KeyboardAvoidingView>
        
    )
}


const styles = StyleSheet.create({
    container :{
        flex : 1,
        alignItems : 'center',
        // justifyContent :'center',
        backgroundColor: '#FFFFFF',
        // flexDirection :'column',
        paddingTop:'10%'
    },
    tinyLogo: {
        width : '80%',
        paddingBottom : 50,
        resizeMode: "contain",
        paddingTop : 50,
    },
    tx:{
        color:'#FFFFFF',
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

