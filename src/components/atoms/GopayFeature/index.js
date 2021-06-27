import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IcPay, IcNearby, IcTopUp, IcMore} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const GopayFeature = ({type, title, go}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.bodyGopay}
      onPress={() => navigation.navigate(go)}>
      {type === 'pay' && <IcPay />}
      {type === 'nearby' && <IcNearby />}
      {type === 'topup' && <IcTopUp />}
      {type === 'more' && <IcMore />}
      <Text style={styles.textGopay}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GopayFeature;

const styles = StyleSheet.create({
  textGopay: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
    marginTop: 12,
  },
  bodyGopay: {
    flex: 1,
    alignItems: 'center',
  },
});
