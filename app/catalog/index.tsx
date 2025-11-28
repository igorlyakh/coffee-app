import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { filterAtom } from '../../entities/filter/model/filter.state';
import CoffeeCard from '../../shared/CoffeeCard/CoffeeCard';

export default function Catalog() {
  const [{ coffee }, filter] = useAtom(filterAtom);

  useEffect(() => {
    filter();
  }, []);
  return (
    <View style={styles.root}>
      {coffee?.map(item => {
        return (
          <CoffeeCard
            key={item.id}
            name={item.name}
            subTitle={item.subTitle}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 13,
    rowGap: 16,
    justifyContent: 'center',
  },
});
