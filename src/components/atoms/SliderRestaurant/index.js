import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const SliderRestaurant = ({title, img}) => {
  return (
    <View style={styles.imageTextWrapperRestaurant}>
      <Image source={img} style={styles.imageRestaurant} />
      <Text style={styles.textRestaurant}>{title}</Text>
    </View>
  );
};

export default SliderRestaurant;

const styles = StyleSheet.create({
  imageTextWrapperRestaurant: {
    marginRight: 14,
  },
  imageRestaurant: {
    width: 160,
    borderRadius: 8,
    marginBottom: 6,
    resizeMode: 'cover',
  },
  textRestaurant: {
    color: '#130f40',
    fontSize: 14,
    fontWeight: '700',
  },
});
