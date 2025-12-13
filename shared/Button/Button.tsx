import React, { ReactNode } from 'react';
import {
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

type ButtonProps = PressableProps & {
  title: string | ReactNode;
  style?: StyleProp<ViewStyle>;
  pressableStyle?: StyleProp<ViewStyle>;
};

export default function Button({ title, style, pressableStyle, ...props }: ButtonProps) {
  const animatedValue = new Animated.Value(100);

  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryDark, Colors.primary],
  });

  const fadeIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
    props.onPressIn && props.onPressIn(e);
  };

  const fadeOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
    props.onPressOut && props.onPressOut(e);
  };

  return (
    <Pressable
      {...props}
      onPressIn={fadeIn}
      onPressOut={fadeOut}
    >
      <Animated.View style={[styles.button, style, { backgroundColor: color }]}>
        <Text style={styles.text}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    borderRadius: Radius.r16,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.f16,
    fontFamily: Fonts.soraSemiBold,
  },
});
