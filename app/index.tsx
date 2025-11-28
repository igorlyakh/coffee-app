import { router } from 'expo-router';
import { useEffect } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from '../shared/Button/Button';
import { Colors, Fonts } from '../shared/tokens';

export default function App() {
  const redirect = () => {
    router.replace('/catalog');
  };

  const animatedValue = new Animated.ValueXY({
    x: -100,
    y: 0,
  });

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: {
        x: 0,
        y: 1,
      },
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/main-bg.jpg')}
      style={styles.container}
      resizeMode="contain"
      imageStyle={styles.image}
    >
      <View style={styles.content}>
        <View style={styles.textBlock}>
          <Animated.Text
            style={{
              ...styles.header,
              transform: [{ translateY: animatedValue.x }],
              opacity: animatedValue.y,
            }}
          >
            Одно из самых вкусных кофе в городе!
          </Animated.Text>
          <Text style={styles.text}>
            Свежие зёрна, настоящая арабика и бережная обжарка
          </Text>
        </View>
        <Button
          title="Начать"
          onPress={redirect}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: Colors.black,
  },
  content: {
    gap: 24,
  },
  textBlock: {
    gap: 8,
    alignItems: 'center',
  },
  header: {
    fontSize: Fonts.f34,
    fontFamily: Fonts.soraSemiBold,
    textAlign: 'center',
    color: Colors.white,
    width: 315,
    letterSpacing: 0.34,
  },
  text: {
    fontSize: Fonts.f14,
    letterSpacing: 0.14,
    color: Colors.grey,
    textAlign: 'center',
    lineHeight: 22,
    fontFamily: Fonts.sora,
  },
  image: {
    transform: [{ translateY: -150 }],
  },
});
