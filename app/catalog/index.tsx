import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { filterAtom } from '../../entities/filter/model/filter.state';
import SearchInput from '../../entities/filter/ui/SearchInput/SearchInput';
import CoffeeCard from '../../shared/CoffeeCard/CoffeeCard';

export default function Catalog() {
  const [{ coffee, isLoading }, filter] = useAtom(filterAtom);

  const [searchInput, setSearchInput] = useState<string>('');

  useEffect(() => {
    filter();
  }, []);

  useEffect(() => {
    filter({ text: searchInput });
  }, [searchInput]);

  return (
    <>
      <SearchInput
        value={searchInput}
        onChangeText={setSearchInput}
      />
      {isLoading && <ActivityIndicator size={'large'} />}
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
    </>
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
