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
import { DataTable } from 'react-native-paper';

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
    
    let vndDong = Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND",
    });

    return (
      <View style={styles.container}>
        <View>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>{"\n"} Số biên lai: 11111{"\n"} </Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
        </View>
        <View>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>{"\n"} Năm: 2022{"\n"} </Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
        </View>
        <View>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>{"\n"} Ngày in biên lai: 15/12/2022{"\n"} </Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
        </View>
        <View>
          <Text style={{flex: 1, flexWrap: 'wrap'}}>{"\n"} Trạng thái: Đã thanh toán{"\n"} </Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
        </View>
        {/* <ScrollView horizontal={true}>
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
        </ScrollView> */}
        <View style={{justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
          <DataTable>
            <DataTable.Header style={styles.header}>
              <DataTable.Title>Nội dung</DataTable.Title>
              <DataTable.Title>Giá</DataTable.Title>
            </DataTable.Header>
            <DataTable.Row style={styles.row}>
              <DataTable.Cell>{content[0]}</DataTable.Cell>
              <DataTable.Cell>{vndDong.format(cost[0])}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.row}>
              <DataTable.Cell>{content[1]}</DataTable.Cell>
              <DataTable.Cell>{vndDong.format(cost[1])}</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row style={styles.row}>
              <DataTable.Cell>Thành tiền</DataTable.Cell>
              <DataTable.Cell>{vndDong.format(cost[0] + cost[1])}</DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
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
