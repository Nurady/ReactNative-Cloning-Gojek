import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GopayFeature} from '../../atoms';
import {IcGopay} from '../../../assets';

export default class GopayContent extends Component {
  render() {
    return (
      <View style={styles.sectionGopay}>
        <View style={styles.headerGopay}>
          <IcGopay />
          <Text style={styles.textGopay}>Rp.50.000</Text>
        </View>
        <View style={styles.contentGopay}>
          <GopayFeature title="Pay" type="pay" go={'ScanQRCode'} />
          <GopayFeature title="Nearby" type="nearby" />
          <GopayFeature title="Top Up" type="topup" />
          <GopayFeature title="More" type="more" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionGopay: {
    marginTop: 8,
  },
  headerGopay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#2C5FB8',
    padding: 14,
  },
  textGopay: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  contentGopay: {
    flexDirection: 'row',
    backgroundColor: '#2F65BD',
    paddingTop: 20,
    paddingBottom: 14,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
});
