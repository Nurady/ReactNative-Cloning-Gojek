import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {IlBannerNews, IcLogoGojek, IlBannerFootball} from '../../../assets';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';

const NewsSection = ({title, desc, type, go}) => {
  const navigation = useNavigation();
  return (
    <View>
      {type === 'news' && <Image source={IlBannerNews} style={styles.IlNews} />}
      {type === 'football' && (
        <Image source={IlBannerFootball} style={styles.IlNews} />
      )}
      <IcLogoGojek style={styles.IlLogoGojek} />
      <View>
        <Text style={styles.titleTextNews}>{title}</Text>
        <Text style={styles.contentTextNews}>{desc}</Text>
        <View style={styles.button}>
          <Button title="read" onPress={() => navigation.navigate(go)} />
        </View>
      </View>
    </View>
  );
};

export default NewsSection;

const styles = StyleSheet.create({
  IlNews: {
    width: '100%',
    borderRadius: 8,
    position: 'relative',
  },
  IlLogoGojek: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
  },
  titleTextNews: {
    textTransform: 'uppercase',
    color: '#130f40',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 6,
    marginBottom: 4,
  },
  contentTextNews: {
    color: '#576574',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  button: {
    alignSelf: 'flex-end',
    marginTop: 6,
  },
});
