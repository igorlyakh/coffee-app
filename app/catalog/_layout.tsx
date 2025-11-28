import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Colors } from '../../shared/tokens';

export default function CatalogLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: Colors.catalogColor,
          },
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
