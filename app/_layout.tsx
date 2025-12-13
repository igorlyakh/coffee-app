import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from '../shared/tokens';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  const [loaded] = useFonts({
    Sora: require('../assets/fonts/Sora-Regular.ttf'),
    SoraSemiBold: require('../assets/fonts/Sora-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: Colors.black,
            paddingTop: insets.top,
          },
          headerShown: false,
        }}
      />
    </SafeAreaProvider>
  );
}
