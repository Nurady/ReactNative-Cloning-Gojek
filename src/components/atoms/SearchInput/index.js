import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {IcSearch, IcPromo} from '../../../assets';

const SearchInput = () => {
  return (
    <View style={styles.SearchPromoWrapper}>
      <View style={styles.SearchWrapper}>
        <TextInput style={styles.input} placeholder="Masukkan Kata Kunci" />
        <IcSearch style={styles.IcSearch} />
      </View>
      <View style={styles.PromoWrapper}>
        <IcPromo style={styles.IcPromo} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#F8E8E8',
    borderRadius: 25,
    paddingLeft: 45,
    paddingRight: 20,
    height: 40,
    fontSize: 13,
    backgroundColor: 'white',
  },
  IcSearch: {
    position: 'absolute',
    top: 11,
    left: 10,
  },
  SearchPromoWrapper: {
    flexDirection: 'row',
  },
  SearchWrapper: {
    position: 'relative',
    flex: 1,
    marginRight: 20,
  },
  PromoWrapper: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
