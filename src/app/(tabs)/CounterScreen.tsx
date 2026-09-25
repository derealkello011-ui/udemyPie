import { useReducer, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const setCounterValue = (
    state: {count: number},
    action: { type: "increment" | "decrement", payload: number }
) => {
    switch ( action.type ) {
        case 'increment':
        case 'decrement':
            return { ...state, count: state.count + action.payload };
        default:
            return state;
    }
    
}

const CounterScreen = () => {
    const [ state, runReducer ] = useReducer( setCounterValue, { count: 0 } );
    let [ counter, setCounter ] = useState(0);

    return (
        <SafeAreaView>
            
            <View style={styles.container}>
                <Text style={styles.buttonP}>Current Count: {state.count} </Text>
                    <View style={styles.touchableContainer}>
                        <TouchableOpacity style={styles.customBtn1} onPress={() => {
                            runReducer({type: 'increment', payload: 1})
                            } }
                            >
                            <Text style={styles.touchableText}>Increase</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[ styles.customBtn1, styles.customBtn2 ]} onPress={() => {
                            if ( state.count > 0 ) {
                                runReducer({type: 'decrement', payload: -1})
                            } else { return; }
                            }}>
                            <Text style={styles.touchableText}>Decrease</Text>
                        </TouchableOpacity>

                    </View>
            </View>
            <View style={ styles.container }>
                <View style={ styles.touchableContainer }>
                    <Text style={ styles.buttonP }>useState Counter - { counter }</Text>
                    <Button title='Increase' color={'#1af186'} onPress={() => {
                        setCounter( counter => counter + 1 );
                    }} />
                    <Button title='Decrease' onPress={() => {
                        if ( counter <= 0 ) {
                            alert( "Cannot go below 0" );
                            return;
                        }
                        setCounter( counter => counter - 1 );
                    }} />
                </View>

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
        overflow: 'hidden',
        width: 200,
        height: 300,
    },
    buttonP: {
        borderColor: '#11ff00',
        backgroundColor: '#1ac3f1',
        color: '#000',
        paddingVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 10
    },
    customBtn1: {
        backgroundColor: '#1af186',
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 12,
    },
    customBtn2: {
        backgroundColor: '#ee4d4ddc',
    },
    touchableText: {
        fontWeight: 'bold',
        color: '#fff'
    },
    touchableContainer: {
        paddingVertical: 10,
        alignContent: 'center',
        justifyContent: 'space-evenly'
    }
})