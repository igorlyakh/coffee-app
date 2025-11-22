import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Button from './shared/Button/Button';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/main-bg.jpg')}
      style={styles.container}
      resizeMode="contain"
      imageStyle={styles.image}
    >
      <View style={styles.content}>
        <View style={styles.textBlock}>
          <Text style={styles.header}>Одно из самых вкусных кофе в городе!</Text>
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
