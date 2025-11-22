import { useEffect } from 'react';
import { Animated, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from './shared/Button/Button';

export default function App() {
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
      source={require('./assets/main-bg.jpg')}
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
        <Button title="Начать" />
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
    backgroundColor: '#000000',
  },
  content: {
    gap: 24,
  },
  textBlock: {
    gap: 8,
  },
  header: {
    fontSize: 34,
    fontWeight: 600,
    textAlign: 'center',
    color: '#FFFFFF',
    width: 315,
    letterSpacing: 0.34,
  },
  text: {
    fontSize: 14,
    letterSpacing: 0.14,
    color: '#A9A9A9',
    textAlign: 'center',
    lineHeight: 22,
  },
  image: {
    transform: [{ translateY: -150 }],
  },
});
