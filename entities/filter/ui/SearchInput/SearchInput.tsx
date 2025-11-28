import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import SearchIcon from '../../../../shared/SearchIcon/SearchIcon';
import { Colors, Fonts, Radius } from '../../../../shared/tokens';

export default function SearchInput(props: TextInputProps) {
  return (
    <View>
      <TextInput
        {...props}
        style={styles.root}
        placeholder="Найти кофе"
        placeholderTextColor={Colors.textInput}
      />
      <View style={styles.icon}>
        <SearchIcon />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.mainInput,
    width: 315,
    height: 52,
    borderRadius: Radius.r16,
    paddingHorizontal: 48,
    paddingVertical: 17,
    color: Colors.white,
    fontSize: Fonts.f14,
    fontFamily: Fonts.sora,
  },
  icon: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
});
