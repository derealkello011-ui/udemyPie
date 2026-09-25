import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResourcesScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View>
        <Text>ResourcesScreen</Text>
        <TouchableOpacity style={styles.customBtn1} onPress={() => router.push('/screens/TextScreen')}>
          <Text style={styles.touchableText}>Text Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customBtn1} onPress={() => router.push('/screens/BoxScreen')}>
          <Text style={styles.touchableText}>Box Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customBtn1} onPress={() => router.push('/screens/PositionScreen')}>
          <Text style={styles.touchableText}>Positioning Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ResourcesScreen

const styles = StyleSheet.create({
customBtn1: {
    backgroundColor: '#003cff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    // alignContent: 'center',
    // alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 12,
  },
touchableText: {
    fontWeight: 'bold',
    color: '#fefdfd',
    fontSize: 20
    },
})