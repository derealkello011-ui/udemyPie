import { useTheme } from '@/Theme/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { ColorValue, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const TabIcon = ( {
  name,
  focused,
  color,
}: {
  name: keyof typeof Ionicons.glyphMap;
  focused: boolean;
  color: ColorValue
  } ) => (
  <View
    style={
      {
        width: 65,
        height: 55,
        borderRadius: 25,
        backgroundColor: focused ? "#ff6f00" : "transparent",
        alignItems: 'center',
        justifyContent: 'center',
        top: 5
      }
    }
  >
    <Ionicons name={name} size={22} color={focused ? '#ffffff' : color} />
  </View>
);

export default function TabsLayout() {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.tabMuted,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.text,
          borderRadius: 30,
          marginHorizontal: 15,
          position: 'absolute',
          bottom: Math.max( insets.bottom, 20 ),
          height: 70,
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
            <TabIcon name={focused ? "cube-sharp" : "cube-outline"} color={color} focused={focused}/>
          ),
        }}
      />
      <Tabs.Screen
        name="Resources"
        options={{
          title: 'Resources',
          tabBarIcon: ({ focused, color }) => (
            <TabIcon name={focused ? "library-sharp" : "library-outline"} focused={focused} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='CounterScreen'
        options={{
          title: 'Counter',
          tabBarIcon: ( { focused, color } ) => (
            <TabIcon name={focused ? "add-circle-sharp" : "add-circle-outline"} focused={focused} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name='SquareScreens'
        options={{
          title: 'Square',
          tabBarIcon: ( { focused, color } ) => (
            <TabIcon name={focused? 'basketball-sharp': 'basketball-outline'} focused={focused} color={color} />
          )
        }}
      />
    </Tabs>
  );
}