
import { useTheme } from '@/Theme/useTheme';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const TextScreen = () => {
  const [textInput, setTextInput] = useState('');
  const { colors, isDark } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Text Screen',
          headerBackTitle: 'Back',
        }}
      />
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text,
            borderColor: isDark ? 'rgba(255, 255, 255, 0.2)' : '#000',
            backgroundColor: colors.card,
          },
        ]}
        placeholder="Enter your text here..."
        placeholderTextColor={isDark ? '#94A3B8' : '#64748B'}
        autoCapitalize="none"
        autoCorrect={false}
        value={textInput}
        onChangeText={setTextInput} // Fixed: Directly updates state with the typed string
      />
      <Text style={[styles.inputDisplay, { color: colors.text }]}>
        You typed: {textInput}
      </Text>
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 20,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontSize: 18,
  },
  inputDisplay: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: '700',
  },
});

