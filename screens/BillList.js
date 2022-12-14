import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BillList() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button
        title="Scan để xem in-tư của bạn bè nào"
        onPress={() => navigation.navigate("Statistic")}
      />
      <View>
        <View style={styles.float}>
          <Text style={styles.half}>Chưa đăng ký dịch vụ Wifi</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Statistic");
            }}
          >
            {/* <Image
              top="80%"
              left="200%"
              source={require("../assets/register.png")}
            /> */}
          </TouchableOpacity>
        </View>
        {/* <Image top="35%" source={require("../assets/wifi.png")} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff"
  },
});
