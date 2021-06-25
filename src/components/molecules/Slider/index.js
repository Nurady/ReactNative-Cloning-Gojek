import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {SliderRestaurant} from '../../atoms';
import {IcLogoGoFood, IlRes1, IlRes2, IlRes3, IlRes4} from '../../../assets';

export default class Slider extends Component {
  render() {
    return (
      <View>
        <IcLogoGoFood />
        <View style={styles.textWrapperNearby}>
          <Text style={styles.titleNearby}>Nearby Restaurants</Text>
          <Text style={styles.subTitleNearby}>See All</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.WrapperNearbyRestaurant}>
            <SliderRestaurant title="RM. Minang Raya" img={IlRes1} />
            <SliderRestaurant title="RM. Kabayan" img={IlRes2} />
            <SliderRestaurant title="RM. Kafe Kita" img={IlRes3} />
            <SliderRestaurant title="Mc Donal Senen" img={IlRes4} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textWrapperNearby: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  titleNearby: {
    color: '#130f40',
    fontSize: 16,
    fontWeight: '600',
  },
  subTitleNearby: {
    color: '#27ae60',
    fontSize: 16,
    fontWeight: '600',
  },
  WrapperNearbyRestaurant: {
    flexDirection: 'row',
  },
});
