import { StyleSheet, View } from 'react-native';
import {SafeAreaView} from'react-native-safe-area-context'
import {Searchbar,Text} from 'react-native-paper';
import {useState} from'react';
import {AntDesign,MaterialCommunityIcons} from '@expo/vector-icons';

const items = () => {
  const [searchQuery,setSearchQuery] = useState("");
  return (
    <SafeAreaView
      style={{
        flex : 1,
        width : '95%',
        margin : 'auto'
      }}
      >
      <View
        style={{
          flexDirection : 'row',
          justifyContent : 'space-between',
          marginVertical : 10
        }}
       >
        <Text variant='titleLarge'>Products</Text>
        <AntDesign name="plus" size={24} color="black" />
      </View>
      <View
        style={{
          flexDirection : 'row',
          justifyContent : 'space-between',
          alignItems : 'center'
        }}
      >
        <Searchbar
          mode='bar'
          size='small'
          style={{
            width : '85%',
            borderRadius : 15,
            backgroundColor : '#fff',
          }}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <MaterialCommunityIcons name="sort-bool-ascending-variant" size={30} color="black" />
      </View>
    </SafeAreaView>
  );
};

export default items;

const styles = StyleSheet.create({});