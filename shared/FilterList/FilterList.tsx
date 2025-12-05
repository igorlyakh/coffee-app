import { useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { filterAtom } from '../../entities/filter/model/filter.state';
import { Colors, Fonts, Radius } from '../tokens';

const CATEGORIES: { label: string; value: string }[] = [
  { label: 'Все', value: '' },
  { label: 'Капучино', value: 'cappuccino' },
  { label: 'Латте', value: 'latte' },
  { label: 'Маккиято', value: 'macchiato' },
  { label: 'Американо', value: 'americano' },
];

export default function FilterList() {
  const [activeValue, setActiveValue] = useState<string>(CATEGORIES[0].value);
  const filter = useSetAtom(filterAtom);

  useEffect(() => {
    filter({ type: activeValue });
  }, [activeValue, filter]);

  return (
    <View style={styles.root}>
      {CATEGORIES.map(item => {
        const isActive = item.value === activeValue;
        return (
          <Pressable
            key={item.value || 'all'}
            onPress={() => setActiveValue(item.value)}
            style={({ pressed }) => [
              styles.chip,
              isActive && styles.chipActive,
              pressed && styles.chipPressed,
            ]}
          >
            <Text style={[styles.text, isActive && styles.textActive]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    borderRadius: Radius.r16,
  },
  chipActive: {
    backgroundColor: Colors.primary,
  },
  chipPressed: {
    opacity: 0.8,
  },
  text: {
    fontSize: Fonts.f14,
    fontFamily: Fonts.sora,
    color: Colors.priceColor,
  },
  textActive: {
    color: Colors.white,
    fontFamily: Fonts.soraSemiBold,
  },
});
