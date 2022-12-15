import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  SectionList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DataTable } from "react-native-paper";
// import GridView from 'react-native-super-grid';

export default function BillList() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingRight: 30,
          paddingLeft: 30,
          paddingTop: 30,
        }}
      >
        <View>
          <View>
            <TouchableOpacity
              style={{ paddingTop: 30 }}
              onPress={() => {
                navigation.navigate("Bill");
              }}
            >
              <View
                style={{
                  flex: 1,
                  // width: '200%',
                  height: "100%",
                  // flexDirection: "row",
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                  // marginHorizontal: 0,
                  // marginVertical: 0,
                  borderRadius: 4,
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                  marginLeft: 0,
                }}
              >
                <View
                  style={{
                    padding: 16,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#333",
                    }}
                  >
                    Số biên lai: 111111
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      color: "#666",
                    }}
                  >
                    3,000,000đ
                  </Text>
                  <View
                    style={{
                      width: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: 0,
                    }}
                  >
                    <Button
                      style={styles.paid}
                      title="Chưa thanh toán"
                      onPress={() => navigation.navigate("Bill")}
                      color="#8b0000"
                    />
                  </View>
                  {/* </View> */}
                  {/* <Text style={styles.half}>Đã thanh toán</Text> */}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{ paddingTop: 30 }}
              onPress={() => {
                navigation.navigate("Bill");
              }}
            >
              <View
                style={{
                  flex: 1,
                  // width: '200%',
                  height: "100%",
                  // flexDirection: "row",
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                  // marginHorizontal: 0,
                  // marginVertical: 0,
                  borderRadius: 4,
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  shadowOffset: {
                    height: 1,
                    width: 1,
                  },
                  marginLeft: 0,
                }}
              >
                <View
                  style={{
                    padding: 16,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: "#333",
                    }}
                  >
                    Số biên lai: 111111
                  </Text>

                  <Text
                    style={{
                      fontSize: 14,
                      color: "#666",
                    }}
                  >
                    3,000,000đ
                  </Text>
                  <View
                    style={{
                      width: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: 0,
                    }}
                  >
                    <Button
                      style={styles.paid}
                      title="Đã thanh toán"
                      onPress={() => navigation.navigate("Bill")}
                      color="#40826D"
                    />
                  </View>
                  {/* </View> */}
                  {/* <Text style={styles.half}>Đã thanh toán</Text> */}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paid: {
    backgroundColor: "#2e8b57",
    height: "100%",
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    height: 40,
    backgroundColor: "#FFFFFF",
  },

  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
  },
  status: {
    color: "#FFFFFF",
    textAlign: "center",
    justifyContent: "center",
  },
  leftColumn: {
    flex: 6,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: 8,
  },
  rightColumn: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 8,
  },
  dueDateText: {
    borderRadius: 4,
    marginTop: 8,
    padding: 4,
  },
  billAmountText: {
    textAlign: "right",
  },
});
