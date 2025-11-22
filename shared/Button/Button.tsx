import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export default function Button({ title, ...props }: PressableProps & { title: string }) {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    borderRadius: Radius.r16,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.f16,
    fontWeight: 600,
  },
});
