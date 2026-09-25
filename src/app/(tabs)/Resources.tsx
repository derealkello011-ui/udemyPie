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
      </View>
    </SafeAreaView>
  )
}

export default ResourcesScreen

const styles = StyleSheet.create({
customBtn1: {
    backgroundColor: '#6deead',
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 5,
    borderRadius: 12,
  },
touchableText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20
    },
})