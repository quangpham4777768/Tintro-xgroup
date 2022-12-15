import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

import { Dimensions } from "react-native";
import { View, Text, Button, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#699BF7' },
  text: { textAlign: 'center', fontWeight: '100', flexWrap: 'wrap' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#FFFFFF' }
});

export default function Statistic() {
  return (
    <View style={styles.container}>
      <Text style={{paddingBottom : 30, textAlign : "center"}}>Tiền điện của nhà trọ 01</Text>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel="đ"
        yAxisSuffix="K"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#fffff",
          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          // propsForDots: {
          //   r: "6",
          //   strokeWidth: "2",
          //   stroke: "#000000",
          // },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
}
