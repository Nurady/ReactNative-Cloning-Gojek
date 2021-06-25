import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavbarButton} from '../../atoms';

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.bottomNavigator}>
        <NavbarButton type="home active" title="Home" active />
        <NavbarButton type="order active" title="Order" />
        <NavbarButton type="inbox active" title="Inbox" />
        <NavbarButton type="account active" title="Account" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomNavigator: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
  },
});
