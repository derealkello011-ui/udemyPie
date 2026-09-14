import { ThemeProvider } from "@/Theme/ThemeProvider";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
  const colors = useColorScheme();
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
