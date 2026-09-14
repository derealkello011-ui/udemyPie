
import { useTheme } from "@/Theme/useTheme";
import { Tabs } from "expo-router";

export default function TabsLayout() { 
    const { colors } = useTheme();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarStyle: {
                    backgroundColor: colors.header,
                    borderTopColor: colors.border,
                }
            }}
        >
            <Tabs.Screen 
                name='Flatlist'
                options={{
                    title: 'Home',
                }}
            />
            <Tabs.Screen 
                name='Buttons'
                options={{
                    title: 'Buttons',
                }}
            />
            <Tabs.Screen 
                name='Resources'
                options={{
                    title: 'Resources',
                }}
            />

        </Tabs>
    );
}