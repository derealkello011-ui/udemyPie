import { useTheme } from '@/Theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { ColorValue, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TabIconProps {
  name: keyof typeof Ionicons.glyphMap;
  focused: boolean;
  color: ColorValue;
}

const TabIcon = ({ name, focused, color }: TabIconProps) => {
  const { colors } = useTheme();

  return (
    <View
      style={[
        styles.iconContainer,
        {
          backgroundColor: focused ? colors.primary : 'transparent',
        },
      ]}
    >
      <Ionicons
        name={name}
        size={22}
        color={focused ? '#FFFFFF' : color}
      />
    </View>
  );
};

export default function TabsLayout() {
  const { colors, isDark } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: isDark ? '#94A3B8' : '#64748B',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderRadius: 30,
          marginHorizontal: 15,
          position: 'absolute',
          bottom: Math.max(insets.bottom, 20),
          height: 70,
          borderWidth: 1,
          borderColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: isDark ? 0.3 : 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
        animation: 'shift',
        tabBarItemStyle: {
          paddingTop: 10,
          alignItems: 'center',
        },
        tabBarIconStyle: {
          animationDelay: 10,
          alignItems: 'center',
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="Flatlist"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'home' : 'home-outline'} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ColorScreen"
        options={{
          title: 'ColorScreen',
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'cube-sharp' : 'cube-outline'} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Resources"
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'library-sharp' : 'library-outline'} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="CounterScreen"
        options={{
          title: 'Counter',
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'add-circle-sharp' : 'add-circle-outline'} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SquareScreens"
        options={{
          title: 'Square',
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? 'basketball-sharp' : 'basketball-outline'} focused={focused} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 55,
    height: 45,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
    top: 2,
  },
});