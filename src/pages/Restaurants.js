import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';

import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
  {
    id: 0,
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/07/aa/fa/70/cafe-murano.jpg',
    name: 'Cafe Murano',
    address: 'United Kingdom',
    city: "Altanta",
  },
  {
    id: 1,
    image: 'https://images.otstatic.com/prod/24164531/1/large.jpg',
    name: 'Seasons 52 - Altamonte Springs',
    address: 'United Kingdom',
    city: "Alton",
  },
  {
    id: 2,
    image:
      'https://d1ralsognjng37.cloudfront.net/779ea345-a3ec-45a5-a9c2-3a9c1442fcce.jpeg',
    name: "Miller's Ale House",
    address: 'United Kingdom',
    city: "Altanta",
  },
  {
    id: 3,
    image:
      'https://cdn.usarestaurants.info/assets/uploads/e7cb0a9b5d7d1bf11a01895da1118c37_-united-states-florida-seminole-county-altamonte-springs-quickly-bistro-boba-407-630-6200htm.jpg',
    name: 'Quickly Bistro & Boba',
    address: 'United Kingdom',
    city: "Alpine",
  },
  {
    id: 4,
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/08/4a/a0/37/the-crepevine.jpg',
    name: 'The Crepevine',
    address: 'United Kingdom',
    city: "Alma",
  },
];

const Restaurants = ({route, navigation}) => {
  const {id, name} = route.params;

  const renderRestaurants = {name} == restaurants.item.city ? ({item}) => {
    return (
      <RestaurantCard
        restaurant={item}
        onClick={() => navigation.navigate('RestaurantPage', item)}
      />
    );
  } : null ;

  return (
    <SafeAreaView>
      <Text style={styles.text}>{name} Restaurants</Text>
      <View>
        <FlatList data={restaurants} renderItem={renderRestaurants} />
      </View>
    </SafeAreaView>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'brown',
    marginTop: 10,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: 'brown',
  },
});
