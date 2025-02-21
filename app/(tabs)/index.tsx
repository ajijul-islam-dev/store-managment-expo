import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
//import RNPickerSelect from "react-native-picker-select";
import { AntDesign,FontAwesome6, MaterialIcons ,Feather,MaterialCommunityIcons,SimpleLineIcons} from "@expo/vector-icons";
import {Link} from 'expo-router';
import {SafeAreaView} from'react-native-safe-area-context'
import {Picker} from '@react-native-picker/picker';

const OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const Index = () => {
  const theme = useTheme();
  const [gender, setGender] = useState<string>();
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.nameTitle} variant="titleLarge">
          Hello Al Muhib Pharmacy
        </Text>
        <View style={{ ...styles.box, backgroundColor: theme.colors.primary }}>
          <View style={styles.BoxRow}>
            <Text style={{ ...styles.nameTitle, color: "#fff" }} variant="titleLarge">
              Summary
            </Text>
          <View style={{flexDirection : 'row',justifyContent : 'flex-end',alignItems : 'center' }}>
            <AntDesign style={{color : 'white'}} name="filter" size={20} color="black" />
            <Picker
                style={{width : 150,color : 'white'}}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)}
              >
                <Picker.Item label="Today" value="java" />
                <Picker.Item label="This week" value="js" />
            </Picker>
          </View>
          </View>
          <View style={styles.BoxRow}>
            <View>
              <Text style={styles.boxTitle}>Sold Quantities</Text>
              <Text style={styles.boxValue}>0</Text>
            </View>
            <View>
              <Text style={styles.boxTitle}>Sold Quantities</Text>
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>
          <View style={styles.BoxRow}>
            <View>
              <Text style={styles.boxTitle}>Sold Quantities</Text>
              <Text style={styles.boxValue}>0</Text>
            </View>
            <View>
              <Text style={styles.boxTitle}>Sold Quantities</Text>
              <Text style={styles.boxValue}>0</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.linkContainer}>
        <Link href='/items' style={styles.linkBox}>
          <View style={{width : '44%',justifyContent : 'center',alignItems : 'center',height : '100%'}}>
             <Feather style={{backgroundColor : 'rgba(254, 164, 127,0.5)',padding  : 5,borderRadius : 5}} name="shopping-bag" size={38} color={theme.colors.primary} />
          </View>
          <View style={{ height : '100%', width : '55%',justifyContent : 'space-evenly'}}>
            <View>
              <Text>All items</Text>
            </View>
            <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
              <Text variant='bodyLarge' style={{fontWeight : 800}}>888</Text>
              <View>
                <AntDesign name="arrowright" style={{fontWeight : 5,}} size={20} color="black" />
              </View>
            </View>
          </View>
        </Link>
        <Link href='/products' style={styles.linkBox}>
          <View style={{width : '44%',justifyContent : 'center',alignItems : 'center',height : '100%'}}>
             <FontAwesome6 style={{backgroundColor : 'rgba(254, 164, 127,0.5)',padding  : 5,paddingHorizontal : 9,borderRadius : 5}} name="bangladeshi-taka-sign" size={38} color={theme.colors.primary} />
          </View>
          <View style={{ height : '100%', width : '55%',justifyContent : 'space-evenly'}}>
            <View>
              <Text>All items</Text>
            </View>
            <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
              <Text variant='bodyLarge' style={{fontWeight : 800}}>888</Text>
              <View>
                <AntDesign name="arrowright" style={{fontWeight : 5,}} size={20} color="black" />
              </View>
            </View>
          </View>
        </Link>
      </View>
      <View style={{...styles.linkContainer,width : '48%',marginVertical : 2}}>
        <Link href='/items' style={{...styles.linkBox,paddingVertical :2}}>
          <View style={{width : '44%',justifyContent : 'center',alignItems : 'center',height : '100%'}}>
             <SimpleLineIcons style={{backgroundColor : 'rgba(254, 164, 127,0.5)',padding  : 5,borderRadius : 5}} name="people" size={38} color={theme.colors.primary} />
          </View>
          <View style={{ height : '100%', width : '55%',justifyContent : 'space-evenly'}}>
            <View>
              <Text>All items</Text>
            </View>
            <View style={{flexDirection : 'row',justifyContent : 'space-between',alignItems : 'center'}}>
              <Text variant='bodyLarge' style={{fontWeight : 800}}>888</Text>
              <View>
                <AntDesign name="arrowright" style={{fontWeight : 5,}} size={20} color="black" />
              </View>
            </View>
          </View>
        </Link>
      </View>
      <View>
        <MaterialCommunityIcons name="contacts" size={24} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "start",
    width: "95%",
    margin: "auto",
  },
  nameTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Roboto Mono",
    fontWeight: "700",
  },
  box: {
    width: "100%",
    height: 200,
    margin: "auto",
    borderRadius: 5,
    paddingRight: 10,
    paddingLeft: 10,
    gap : 10
  },
  BoxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  picker: {
    color: "white", // Text color
    backgroundColor: "transparent",
    fontSize: 0, // Adjust font size
    textAlignVertical: "center", // Align text vertically
    paddingLeft: 20, // Reduce left padding
  },
  viewContainer: {
    width: 125,
    paddingVertical: 0, // Reduce vertical padding
    paddingHorizontal: 0, // Reduce horizontal padding
  },
  boxTitle : {
    color : 'white'
  },
  boxValue : {
    color : 'white',
    fontSize : 20
  },
  linkContainer : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    gap : 10,
    marginVertical : 10
  },
  linkBox : {
    width : '49%',
    height : 80,
    backgroundColor : "white",
    borderRadius : 10,
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingHorizontal : 8,
    gap : 10
  }
});
