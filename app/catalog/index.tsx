import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { filterAtom } from '../../entities/filter/model/filter.state';
import SearchInput from '../../entities/filter/ui/SearchInput/SearchInput';
import CoffeeCard from '../../shared/CoffeeCard/CoffeeCard';
import FilterList from '../../shared/FilterList/FilterList';
import { Colors } from '../../shared/tokens';

export default function Catalog() {
  const [{ coffee, isLoading }, filter] = useAtom(filterAtom);

  const [searchInput, setSearchInput] = useState<string>('');

  // Первый запрос на получение всего списка
  useEffect(() => {
    filter();
  }, []);

  // Фильтрация по тексту. type сохраняется внутри атома.
  useEffect(() => {
    filter({ text: searchInput });
  }, [searchInput]);

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.searchWrapper}>
        <SearchInput
          value={searchInput}
          onChangeText={setSearchInput}
        />
      </View>
      {isLoading && <ActivityIndicator size="large" />}
      <FilterList />
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
  searchWrapper: {
    height: 170,
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainWrapper: {
    gap: 28,
  },
});
