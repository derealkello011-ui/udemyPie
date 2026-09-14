
import { Tabs, useTheme } from 'expo-router';


export default function TabsLayout() { 
    const { colors } = useTheme();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveBackgroundColor: colors.text,
                tabBarStyle: {
                    backgroundColor: colors.card,
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