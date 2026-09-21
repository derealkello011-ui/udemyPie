import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ColorScreen = () => {
  const [color, setColor] = useState<string>('rgb(128, 128, 128)');
  
  const updateColor = () => { 
    setColor(randomRgb());
  };

  // const changeToSquareScreen = () => (
  //   <Redirect href='/screens/SquareScreens' />
  // );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={[styles.colorTile, { backgroundColor: color }]} />
      </View>      
      
      <TouchableOpacity style={styles.customButton} onPress={updateColor}>
        <Text style={styles.buttonText}>Change Color</Text>
      </TouchableOpacity>

      {/* <View style={styles.screen}>
        <TouchableOpacity style={styles.customButton} onPress={changeToSquareScreen}>
          <Text style={styles.buttonText}> Square Screen</Text>
        </TouchableOpacity>
      </View> */}
      
      
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
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingVertical: 30,
    borderColor: '#c1c0c0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#ecb7313b'
  },
  colorTile: {
    height: 150,
    width: 250,
    borderRadius: 30,
  },
  // Custom button layout styles go here:
  customButton: {
    backgroundColor: '#007AFF', // Solid blue color
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000', // Optional drop shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Optional drop shadow for Android
    
  },
  // Custom text styles inside your button go here:
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
