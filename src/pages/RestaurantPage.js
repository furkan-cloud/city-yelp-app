import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const RestaurantPage = ({item}) => {
    return (
        <View>
            <Image
                style = {styles.img}
                source = {{uri:item.image}}
            />
            <Text>{item.name}</Text>
        </View>
    )
}

export default RestaurantPage;

const styles = StyleSheet.create({
    img:{
        width:Dimensions.get('window').width / 4
    }
})