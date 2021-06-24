import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IcBike,
  IcCar,
  IcDoctor,
  IcSend,
  IcDeal,
  IcPulsa,
  IcFood,
  IcMore,
} from '../../../assets';

const MainFeature = ({type, title}) => {
  return (
    <View style={styles.featureWrapper}>
      <View style={styles.iconFeatureWrapper}>
        {type === 'bike' && <IcBike />}
        {type === 'car' && <IcCar />}
        {type === 'doctor' && <IcDoctor />}
        {type === 'send' && <IcSend />}
        {type === 'deal' && <IcDeal />}
        {type === 'pulsa' && <IcPulsa />}
        {type === 'food' && <IcFood />}
        {type === 'more' && <IcMore />}
        <Text style={styles.textFeature}>{title}</Text>
      </View>
    </View>
  );
};

export default MainFeature;

const styles = StyleSheet.create({
  featureWrapper: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textFeature: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 4,
  },
  iconFeatureWrapper: {
    padding: 2,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#FFC700',
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
});
