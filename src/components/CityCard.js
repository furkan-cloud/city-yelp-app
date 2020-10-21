import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// import { useNavigation } from '@react-navigation/native';

const CityCard = ({ city}) => {

    return (
            <TouchableOpacity
                // onPress = {() => navigation.navigate('Restaurants')}
            >
                <Text>{city.name}</Text>
            </TouchableOpacity>
    )
}

export default CityCard;