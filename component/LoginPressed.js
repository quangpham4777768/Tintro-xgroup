import React,{memo , useState} from "react";
import { Alert } from "react-native";

const numberValidator = (number) =>{
    if (!number || number.length >= 10) return Alert('Số điện thoại không hợp lệ.') ;

    return '';
};
const passwordValidator = (password) =>{
    if (!password || password.length <= 8) return 'Mật khẩu không hợp lệ.';

    return '';
};

const _onLoginPressed = () => {
    const NumberError = numberValidator(number.value);
    const PasswordError = passwordValidator(password.value);

    if (NumberError || PasswordError) {
      setNumber({ ...number, error: NumberError });
      setPassword({ ...password, error: PasswordError });
      return;
    }

    navigation.navigate('Scanner');
};

export default memo(_onLoginPressed);