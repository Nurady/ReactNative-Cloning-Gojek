import React from 'react';
import {StyleSheet, View} from 'react-native';

const LineGray = () => {
  return <View style={styles.line} />;
};

export default LineGray;

const styles = StyleSheet.create({
  line: {
    height: 17,
    backgroundColor: '#F2F2F4',
    marginTop: 3,
  },
});
