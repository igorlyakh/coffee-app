import { ImageSourcePropType } from 'react-native';

export interface CoffeeCardProps {
  name: string;
  subTitle: string;
  price: number;
  image: ImageSourcePropType;
  rating: string;
}
