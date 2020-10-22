import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

const RestaurantPage = ({route, navigation}) => {
  const {name, image, address} = route.params;

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: image}} />
      <View style={{margin: 20}}>
        <Text style={styles.restaurantName}>{name}</Text>
        <TouchableOpacity>
          <Text style={styles.restaurantAdress}>{address}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.restaurantAdress}>{address}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.restaurantAdress}>{address}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantPage;

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.9,
    height: 200,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  restaurantAdress: {},
});
