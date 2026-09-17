import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ColorScreen = () => {
  const [colors, setColors] = useState<string[]>([]);
  console.log(colors);
  
  const updateColors = () => { 
    setColors(colors => [...colors, randomRgb()]);
  };

  return (
    // Added style={styles.screen} to ensure the safe area fills the view
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          data={colors}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => (
            <View style={[styles.colorTile, { backgroundColor: item }]} />
          )}
        />
      </View>      
      <Button title='Add a Color' onPress={updateColors} />
    </SafeAreaView>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1, // Allows the screen to expand and hold the scrollable list
  },
  container: {
    flex: 1, // Gives the list container space to expand and scroll
    paddingVertical: 10,
    borderColor: '#c1c0c0',
    borderWidth: 2,
    margin: 10,
    borderRadius: 20,
    overflow: 'hidden', // Keeps the color tiles inside the rounded borders
  },
  colorTile: {
    height: 100,
    width: 200,
    alignSelf: 'center', // Centers the tiles horizontally inside the list
    marginVertical: 5,   // Adds spacing between the tiles
    borderRadius: 8,
  },
});
