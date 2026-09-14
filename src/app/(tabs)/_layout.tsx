
import { useTheme } from "@/Theme/useTheme";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TabsLayout() { 
    const { colors } = useTheme();
    return (
        <SafeAreaProvider>
            <Tabs
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: 'blue',
                    tabBarInactiveTintColor: colors.textSecondary,
                    tabBarStyle: {
                        // backgroundColor: '#fafbba',
                        borderTopColor: colors.border,
                        borderRadius: 20,
                        paddingBottom: 'auto',
                        left: 20,
                        right: 20,
                        height: 65,
                        position: 'absolute',
                        
                    },
                    animation: "shift",
                }}
            >
                <Tabs.Screen 
                    name='Flatlist'
                    options={{
                        title: 'Home',
                        headerBackButtonDisplayMode: "default",
                        tabBarIcon: ( { color, size } ) => (
                            <Ionicons name='home' size={size} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen 
                    name='Buttons'
                    options={{
                        title: 'Buttons',
                        headerBackButtonDisplayMode: "default",
                        tabBarIcon: ( { color, size } ) => (
                            <Ionicons name="add-circle-outline" size={size} color={color}/>
                        )
                    }}
                />
                <Tabs.Screen 
                    name='Resources'
                    options={{
                        title: 'Resources',
                        headerBackButtonDisplayMode: "default",
                        tabBarIcon: ( { color, size } ) => (
                            <Ionicons name="shield-outline" size={size} color={color} />
                        )
                    }}
                />

            </Tabs>
        </SafeAreaProvider>
    );
}