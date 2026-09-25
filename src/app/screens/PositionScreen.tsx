import { useTheme } from '@/Theme/useTheme';
import { Stack } from 'expo-router';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

const PositionScreen = () => {
       const { colors } = useTheme();
    
  return (
    <ScrollView style={[ { backgroundColor: colors.background } ]}>
        <Stack.Screen
              options={{
                    headerShown: Platform.OS === 'ios' ? true : false,
                    title: 'Position Screen',
                    headerBackTitle: 'Back',
                }}
          />
          <View style={styles.parentStyle}>
            <View style={styles.viewOne}/>
            <View style={styles.viewTwo}><Text style={styles.textStyle}>Araba</Text> </View>
            <View style={styles.viewThree}/>
          </View>

    </ScrollView>
  )
}

export default PositionScreen
const styles = StyleSheet.create( {
    parentStyle: {
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 12,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10,
        paddingVertical: 10,
        height: 250
    },
    viewOne: {
        backgroundColor: '#ef8548',
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: '#fff'
    },
    viewTwo: {
        backgroundColor: '#deef48',
        height: 50,
        width: 150,
        borderRadius: 10,
        borderColor: '#fff',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewThree: {
        backgroundColor: '#48efc5',
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: '#fff'
    },
    textStyle: {
        fontWeight: 'bold',
        color: '#24be01',
        fontSize: 18
    }
} );