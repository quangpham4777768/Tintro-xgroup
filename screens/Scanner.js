import React,{useState , useEffect} from "react";
import {Text,View,StyleSheet,Button,Linking, Modal } from 'react-native';
import {BarCodeScanner } from 'expo-barcode-scanner'; 

export default function Scanner(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    
    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
    }, []);
    
    const handleBarCodeScanned = ({ data }) => {
        setScanned(true);
        if (data != '1912463'){
            alert(`Dữ liệu không match`);
        }
        else{
            alert(`BKNet ID ${data} có trong danh sách dữ liệu`);
        }
        
    };

    
    if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
    return <Text>No access to camera</Text>;
    }

    return (
    <View style={styles.container}>
        <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
        />
        {scanned && <Button title={'Bấm để Scan lại'} onPress={() => setScanned(false)} />}
    </View>
    ); 
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        flexDirection : 'column',
        justifyContent :'center'
    }
})