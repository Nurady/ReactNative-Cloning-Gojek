import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {NavbarButton} from '../../atoms';

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.bottomNavigator}>
        <NavbarButton type="home active" title="Home" active go={'Home'} />
        <NavbarButton type="order active" title="Order" go={'NewsDetail'} />
        <NavbarButton type="inbox active" title="Inbox" go={'NewsDetail2'} />
        <NavbarButton type="account active" title="Account" go={'NewsDetail'} />
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
