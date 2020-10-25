import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';

import CityCard from '../components/CityCard';

const cities = [
  {
    id: 0,
    name: 'Allen',
  },
  {
    id: 1,
    name: 'Allendale',
  },
  {
    id: 2,
    name: 'Allentown',
  },
  {
    id: 3,
    name: 'Allison Park',
  },
  {
    id: 4,
    name: 'Allston',
  },
  {
    id: 5,
    name: 'Alma',
  },
  {
    id: 6,
    name: 'Almonte',
  },
  {
    id: 7,
    name: 'Alpharetta',
  },
  {
    id: 8,
    name: 'Alpine',
  },
  {
    id: 9,
    name: 'Alsip',
  },
  {
    id: 10,
    name: 'Altamonte Springs',
  },
  {
    id: 11,
    name: 'Altanta',
  },
  {
    id: 12,
    name: 'Altemonte Springs',
  },
  {
    id: 13,
    name: 'Alton',
  },
  {
    id: 14,
    name: 'Alvaro Obregon',
  },
  {
    id: 15,
    name: 'Ambler',
  },
];

const CityPage = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(cities);
  }, []);

  useEffect(() => {
    const filteredValue = cities.filter((item) => {
      const text = searchValue.toUpperCase();
      const cityName = item.name.toUpperCase();
      return cityName.indexOf(text) > -1;
    });
    setDisplayList(filteredValue);
  }, [searchValue]);

  const renderCities = ({item}) => (
    <CityCard
      city={item}
      onClicked={() => navigation.navigate('Restaurants', item)}
    />
  );

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.inputText}
          value={searchValue}
          placeholder="Search a city.."
          onChangeText={(searchText) => setSearchValue(searchText)}
        />
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={displayList}
          renderItem={renderCities}
        />
      </View>
    </SafeAreaView>
  );
};

export default CityPage;

const styles = StyleSheet.create({
  inputText: {
    marginLeft: 10,
    fontSize: 20,
  },
});
