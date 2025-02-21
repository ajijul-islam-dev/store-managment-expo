import { StyleSheet,Dimensions, Text, View } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'
import {useState} from 'react'
import { AntDesign,FontAwesome6, MaterialIcons ,Feather,MaterialCommunityIcons,SimpleLineIcons} from "@expo/vector-icons";
import {Picker} from '@react-native-picker/picker';
import {useTheme} from 'react-native-paper'
const screenWidth = Dimensions.get('window').width

const Chart = () => {
  const theme = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState();
  const OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];
  return (
      <View>
        <View style={styles.BoxRow}>
              <Text style={{fontSize : 18}} variant="titleLarge">
                Analytics
              </Text>
            <View style={{flexDirection : 'row',justifyContent : 'flex-end',alignItems : 'center' }}>
              <AntDesign name="filter" size={20} color="black" />
              <Picker
                  style={{width : 150,}}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)}
                >
                  <Picker.Item label="Today" value="java" />
                  <Picker.Item label="This week" value="js" />
              </Picker>
            </View>
            </View>
            
  <BarChart
    data={{
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [{
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ]
      }]
    }}
    width={screenWidth -20} // from react-native
    height={220}
    chartConfig={{
      backgroundColor: '#0000',
      backgroundGradientFrom: '#fff',
      backgroundGradientTo: '#fff',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => theme.colors.primary,
      style: {
        borderRadius: 8
      }
    }}
  
    style={{
      marginVertical: 20,
      borderRadius: 8
    }}
  />
</View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  BoxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems : 'center'
  },
});