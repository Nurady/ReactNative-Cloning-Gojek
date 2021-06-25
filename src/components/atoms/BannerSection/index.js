import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import Button from '../Button';
import {IlBannerGoFood, IcLogoGoFood} from '../../../assets';

const BannerSection = () => {
  return (
    <View>
      <ImageBackground
        source={IlBannerGoFood}
        style={styles.bannerGoFodd}
        imageStyle={styles.ImageBackground}>
        <IcLogoGoFood style={styles.IlLogoGoFod} />
        <View style={styles.textWrapperGoFood}>
          <View>
            <Text style={styles.titleGoFood}>Free GO-FOOD Voucher</Text>
            <Text style={styles.subTitleGoFood}>Quick, Before the run out</Text>
          </View>
          <Button title="Get Voucher" />
        </View>
      </ImageBackground>
    </View>
  );
};

export default BannerSection;

const styles = StyleSheet.create({
  bannerGoFodd: {
    width: '100%',
    height: 170,
    position: 'relative',
  },
  IlLogoGoFod: {
    marginTop: 10,
    marginLeft: 10,
  },
  ImageBackground: {
    borderRadius: 8,
  },
  textWrapperGoFood: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  titleGoFood: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    paddingBottom: 8,
  },
  subTitleGoFood: {
    color: 'white',
    fontSize: 13,
    fontWeight: '400',
  },
});
