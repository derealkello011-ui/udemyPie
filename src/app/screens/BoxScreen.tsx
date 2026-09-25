import { useTheme } from '@/Theme/useTheme';
import { Stack } from 'expo-router';
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const BoxScreen = () => {
   const { colors } = useTheme();

  return (
      <ScrollView style={[ { backgroundColor: colors.background } ]}>
          <Stack.Screen
              options={{
                    headerShown: Platform.OS === 'ios' ? true : false,
                    title: 'Box Screen',
                    headerBackTitle: 'Back',
                }}
      />
          <View style={styles.container} >
              <Text style={[styles.textOneStyle, {color: colors.text, backgroundColor: colors.surface}]}>Child One</Text> 
              <Text style={[styles.textTwoStyle, {color: colors.text, backgroundColor: colors.surface}]}>Child Two</Text> 
              <Text style={[styles.textThreeStyle, {color: colors.text, backgroundColor: colors.surface}]}>Child Three</Text> 
          </View>
          {
              Platform.OS === 'ios'
                  ? <StatusBar barStyle={'default'} />
                  : null
          }
      </ScrollView>
  )
}

export default BoxScreen
const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
    },
    container: {
        padding: 10,
        margin: 10,
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 12,
        height: 200,
        justifyContent: 'space-evenly'
    },
    textOneStyle: {
        borderWidth: 2,
        fontWeight: 'bold',
        borderColor: '#fff',
        padding: 5,
        margin: 5,
        borderRadius: 10,
        flex: 2,
        position: 'fixed'
    },
    textTwoStyle: {
        borderWidth: 2,
        fontWeight: 'bold',
        borderColor: '#fff',
        padding: 5,
        margin: 5,
        borderRadius: 10,
        flex: 1,
    },
    textThreeStyle: {
        borderWidth: 2,
        fontWeight: 'bold',
        borderColor: '#fff',
        padding: 5,
        margin: 5,
        borderRadius: 10,
        flex: 1
    }
});