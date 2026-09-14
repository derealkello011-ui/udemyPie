import { Text, FlatList, ListRenderItem, StatusBar, StyleSheet, useColorScheme } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


interface DataItems  {
  id: string;
  name: string;
  age: number;
}

const DATA: DataItems[] = [
  { id: '1', name: "Adjoa" , age: 18},
  { id: '2', name: "Mary" , age: 16},
  { id: '3', name: "Tikka" , age: 19},
  { id: '4', name: "Christabel" , age: 15},
  { id: '5', name: "Linda" , age: 17},
  { id: '6', name: "Maame" , age: 14},
  { id: '7', name: "Jessie" , age: 13},
  { id: '8', name: "Anita" , age: 18},
  { id: '9', name: "Severa" , age: 10},
  { id: '10', name: "Andel" , age: 12},
  { id: '11', name: "Genevieve" , age: 11},
  
];

const renderItem: ListRenderItem<DataItems> = ( { item } ) => (
  <Text style={styles.textStyle}>{item.name} - Age { item.age}</Text>
); 

const FlatlistScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        // horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar
        barStyle={'dark-content'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    marginHorizontal: 20,
    marginLeft: 10,
  }
})
export default FlatlistScreen