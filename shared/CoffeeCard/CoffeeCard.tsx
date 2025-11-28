import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../Button/Button';
import PlusIcon from '../PlusIcon/PlusIcon';
import StarIcon from '../StarIcon/StarIcon';
import { Colors, Fonts, Radius } from '../tokens';
import { CoffeeCardProps } from './coffeeCard.props';

export default function CoffeeCard({
  name,
  subTitle,
  image,
  price,
  rating,
}: CoffeeCardProps) {
  return (
    <View style={styles.root}>
      <View>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={image}
        />
        <View style={styles.rating}>
          <StarIcon />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
      <View style={styles.textBlock}>
        <Text style={styles.drinkName}>{name}</Text>
        <Text style={styles.drinkDescription}>{subTitle}</Text>
      </View>
      <View style={styles.priceBlock}>
        <Text style={styles.price}>{price} ₽</Text>
        <Button
          style={styles.button}
          title={<PlusIcon />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.white,
    width: 150,
    height: 240,
    gap: 12,
    borderRadius: Radius.r16,
    padding: 4,
  },
  textBlock: {
    gap: 4,
  },
  image: {
    width: 142,
    height: 142,
    padding: 0,
    margin: 0,
  },
  rating: {
    position: 'absolute',
    gap: 2,
    flexDirection: 'row',
    left: 8,
    top: 8,
    alignItems: 'center',
  },
  ratingText: {
    color: Colors.white,
    fontSize: Fonts.f10,
    fontFamily: Fonts.soraSemiBold,
  },
  drinkName: {
    color: Colors.darkGrey,
    fontSize: Fonts.f16,
    fontFamily: Fonts.soraSemiBold,
  },
  drinkDescription: {
    fontSize: Fonts.f12,
    fontFamily: Fonts.sora,
    color: Colors.lightDark,
  },
  price: {
    fontSize: Fonts.f18,
    fontFamily: Fonts.soraSemiBold,
    color: Colors.priceColor,
  },
  button: {
    height: 32,
    width: 32,
    borderRadius: 10,
  },
  priceBlock: {
    flexDirection: 'row',
    gap: 41,
  },
});
