import { Text, FlatList, ListRenderItem, StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/Theme/useTheme';

interface DataItems {
  id: string;
  name: string;
  age: number;
}

const DATA: DataItems[] = [
  { id: '1', name: 'Adjoa', age: 18 },
  { id: '2', name: 'Mary', age: 16 },
  { id: '3', name: 'Tikka', age: 19 },
  { id: '4', name: 'Christabel', age: 15 },
  { id: '5', name: 'Linda', age: 17 },
  { id: '6', name: 'Maame', age: 14 },
  { id: '7', name: 'Jessie', age: 13 },
  { id: '8', name: 'Anita', age: 18 },
  { id: '9', name: 'Severa', age: 10 },
  { id: '10', name: 'Andel', age: 12 },
  { id: '11', name: 'Genevieve', age: 11 },
];

// Extracted Item component to consume theme dynamic state cleanly
const RenderItem = ({ item }: { item: DataItems }) => {
  const { colors, isDark } = useTheme();

  // Define appealing dark/light mode gradient pairs
  const gradientColors: [string, string] = isDark
    ? ['#1E293B', '#0F172A'] // Dark Slate to Navy
    : ['#F8FAFC', '#E2E8F0']; // Subtle Light Gray

  return (
    <LinearGradient
      colors={gradientColors}
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.cardContainer,
        { borderColor: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)' },
      ]}
    >
      <Text style={[styles.textStyle, { color: colors.text }]}>
        {item.name}
      </Text>
      <Text style={[styles.subTextStyle, { color: colors.primary }]}>
        Age {item.age}
      </Text>
    </LinearGradient>
  );
};

const renderItem: ListRenderItem<DataItems> = ({ item }) => <RenderItem item={item} />;

const FlatlistScreen = () => {
  const { colors, isDark } = useTheme();

  return (
    <SafeAreaView style={[styles.screenContainer, { backgroundColor: colors.background }]}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listPadding}
      />
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  listPadding: {
    paddingVertical: 12,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
    marginHorizontal: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 14,
    borderWidth: 1,
    // Subtle shadow for depth
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  subTextStyle: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default FlatlistScreen;