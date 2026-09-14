
import { useTheme } from "@/Theme/useTheme";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() { 
    const { colors } = useTheme();
    return (
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
                    )
                }}
            />
            <Tabs.Screen 
                name='Buttons'
                options={{
                    title: 'Buttons',
                    headerBackButtonDisplayMode: "default",
                }}
            />
            <Tabs.Screen 
                name='Resources'
                options={{
                    title: 'Resources',
                    headerBackButtonDisplayMode: "default",
                }}
            />

        </Tabs>
    );
}