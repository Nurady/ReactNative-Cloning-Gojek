import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IcHomeActive,
  IcOrderActive,
  IcInboxActive,
  IcAccountActive,
} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const NavbarButton = ({title, type, active, go}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.iconBottom}>
      <TouchableOpacity
        style={styles.boxIconBottom}
        activeOpacity={0.6}
        onPress={() => navigation.replace(go)}>
        {type === 'home active' && <IcHomeActive />}
        {type === 'order active' && <IcOrderActive />}
        {type === 'inbox active' && <IcInboxActive />}
        {type === 'account active' && <IcAccountActive />}
      </TouchableOpacity>
      <Text style={styles.textIconBottom(active)}>{title}</Text>
    </View>
  );
};

export default NavbarButton;

const styles = StyleSheet.create({
  iconBottom: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  boxIconBottom: {
    width: 32,
    height: 32,
  },
  textIconBottom: active => ({
    fontSize: 10,
    color: active ? '#27ae60' : '#545454',
    fontWeight: active ? '600' : '400',
    textTransform: active ? 'uppercase' : 'capitalize',
    marginTop: 4,
  }),
});
