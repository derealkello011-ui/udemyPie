import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CounterScreen = () => {
    let [ counter, setCounter ] = useState(0);

    return (
        <SafeAreaView>
            
            <View style={styles.container}>
                <Text style={styles.buttonP}>Current Count: { counter }</Text>
                <Button title='Increase' color={'#1af186'} onPress={() => {
                    setCounter( counter++ );
                }} />
                <Button title='Decrease' onPress={() => {
                    if ( counter < 0 ) {
                        alert( "Cannot go beyound 0" );
                        return;
                    }
                    setCounter( counter-- );
                }} />
            </View>

        </SafeAreaView>
  )
}

export default CounterScreen

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderColor: '#b6b2b2',
        borderWidth: 1,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 8,
    },
    buttonP: {
        borderColor: '#11ff00',
        backgroundColor: '#1ac3f1',
        color: '#000',
        padding: 5,
        borderRadius: 5,
    }
})