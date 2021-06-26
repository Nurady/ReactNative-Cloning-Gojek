import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Order = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Order Page</Text>
      <Button
        title="Go To Detail"
        onPress={() => navigation.navigate('NewsDetail2')}
      />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
