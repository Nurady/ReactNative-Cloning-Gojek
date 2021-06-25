import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  Gap,
  Line,
  GopayContent,
  NewsContent,
  BannerSection,
  Slider,
  SearchInput,
  LineGray,
  Navbar,
  FeatureContent,
} from './src/components';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <SearchInput />
          <GopayContent />
          <FeatureContent />
          <LineGray />
          <Gap height={25} />
          <NewsContent />
          <Line />
          <BannerSection />
          <Line />
          <Slider />
          <Line />
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  page: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 18,
    paddingVertical: 18,
  },
});

export default App;
