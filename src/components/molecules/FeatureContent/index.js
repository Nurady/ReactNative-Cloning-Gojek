import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {MainFeature} from '../../atoms';

export default class FeatureContent extends PureComponent {
  render() {
    return (
      <View style={styles.featurePage}>
        <View style={styles.menu}>
          <MainFeature type="bike" title="Go-Ride" />
          <MainFeature type="car" title="Go-Car" />
          <MainFeature type="doctor" title="Go-Doctor" />
          <MainFeature type="send" title="Go-Send" />
          <MainFeature type="deal" title="Go-Deal" />
          <MainFeature type="pulsa" title="Go-Pulsa" />
          <MainFeature type="food" title="Go-Food" />
          <MainFeature type="more" title="Go-More" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  featurePage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  menu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 18,
    flexWrap: 'wrap',
  },
});
