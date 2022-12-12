// import { View } from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Col,
  Cols,
  Cell,
} from "react-native-table-component";
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import React, { Component } from 'react';
// export default function Bill(){

// }
export default class Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        "Nội dung",
        "Số tiền",
      ],
      widthArr: [100, 100]
    };
  }

  render() {
    const state = this.state;
    const tableData = [];
    const content = ['Phí phòng ở từ ngày 01 / 01 / 2022 đến 31/01/2022', 'Phí dịch vụ'];
    const cost = [4000000, 200000];
    for (let i = 0; i < 3; i += 1) {
      const rowData = [];

      rowData.push(content[i]);
      rowData.push(cost[i]);
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <View>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>{"\n"} Số biên lai {"\n"} </Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
        </View>
        <View>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>{"\n"} Năm {"\n"} </Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
        </View>
        <View>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>{"\n"} Ngày in biên lai: {"\n"} </Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
        </View>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderWidth: 1 }}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.header}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderWidth: 1}}>
                {tableData.map((rowData, index) => (
                  <Row
                    key={index}
                    data={rowData}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#FFFFFF" },
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#699BF7' },
  text: { textAlign: 'center', fontWeight: '100', flexWrap: 'wrap' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#FFFFFF' }
});

// export default function Bill(){
//   return (
//     <View style={styles.container}>

//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container :{
//       flex : 1,
//       alignItems : 'center',
//       justifyContent :'center'
//   }
// })
