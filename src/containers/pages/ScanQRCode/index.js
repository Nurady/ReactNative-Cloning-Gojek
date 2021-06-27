import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../../components';

const ScanQRCode = () => {
  return (
    <View style={styles.page}>
      <View style={styles.content} />
      <View style={styles.optionWrapper}>
        <View style={styles.lineWrapper}>
          <View style={styles.line} />
          <Gap height={3} />
          <View style={styles.line} />
        </View>
        <View style={styles.optionContent}>
          <Text style={styles.text}>More Options</Text>
          <Text style={styles.text}>Shortcut</Text>
        </View>
      </View>
    </View>
  );
};

export default ScanQRCode;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#c8d6e5',
  },
  optionWrapper: {
    backgroundColor: 'yellow',
    height: 150,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  lineWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  line: {
    width: 30,
    height: 4,
    backgroundColor: 'gray',
  },
  optionContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
