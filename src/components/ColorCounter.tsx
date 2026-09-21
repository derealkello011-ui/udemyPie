import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ColorCounterScreen = (
    {
        color, onIncrease, onDecrease
    }: {
        color:string, onIncrease: VoidFunction, onDecrease: VoidFunction
    } ) => {
  return (
    <View style={styles.container}> 
          <Text style={styles.header}>{color}</Text>
          <TouchableOpacity style={styles.customBtn} onPress={() => onIncrease()}>
              <Text style={styles.innerText}>Increase {color}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.customBtn} onPress={() => onDecrease()}>
              <Text style={styles.innerText}>Decrease {color}</Text>
          </TouchableOpacity>
    </View>
  )
}

export default ColorCounterScreen

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        padding: 20,
        alignItems: 'center',
        alignSelf: 'center',
        margin: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 600,
        // alignSelf: 'flex-start',
    },
    customBtn: {
        backgroundColor: '#433df9',
        borderRadius: 12,
        padding: 10,
        marginBottom: 4,
        width: 200,
        alignItems: 'center'
    },
    innerText: {
        fontWeight: 600,
        color: '#ffffff'
    }
})