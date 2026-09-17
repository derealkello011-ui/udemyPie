import { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ColorScreen = () => {
  const [ colors, setColors ] = useState<string[]>( [] );
  
  const updateColors = () => { 
    setColors[colors => [...colors, randomRgb()]]
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{
          height: 100, width: 200,
          alignItems: 'center', justifyContent: 'center',
          backgroundColor: randomRgb(),
        }} />
      </View>      
        <Button title='Add a Color' />
    </SafeAreaView>
  )
}

const randomRgb = () => {
  const red = Math.floor( Math.random() * 256 );
  const green = Math.floor( Math.random() * 256 );
  const blue = Math.floor( Math.random() * 256 );

  return `rgb(${ red }, ${ green }, ${ blue })`;

}

export default ColorScreen

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderColor: '#c1c0c0',
    alignItems: 'center',
    borderWidth: 2,
    margin: 10,
    borderRadius: 20
  }
})