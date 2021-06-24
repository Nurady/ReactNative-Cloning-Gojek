import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {
  IcHomeActive,
  IcOrderActive,
  IcInboxActive,
  IcAccountActive,
  IcSearch,
  IcPromo,
  IcGopay,
  IcMore,
  IcFood,
  IcSend,
  IcBike,
  IcDeal,
  IcPulsa,
  IcCar,
  IcDoctor,
  IcLogoGojek,
  IcLogoGoFood,
} from './src/assets/icons';
import {
  IlBannerNews,
  IlBannerFootball,
  IlBannerGoFood,
  IlRes1,
  IlRes2,
  IlRes3,
  IlRes4,
} from './src/assets/illustrations';
import {Button, Gap, Line, GopayFeature} from './src/components';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          {/* Search Bar  */}
          <View style={styles.SearchPromoWrapper}>
            <View style={styles.SearchWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Masukkan Kata Kunci"
              />
              <IcSearch style={styles.IcSearch} />
            </View>
            <View style={styles.PromoWrapper}>
              <IcPromo style={styles.IcPromo} />
            </View>
          </View>
          {/* Go Pay Feature*/}
          <View style={styles.sectionGopay}>
            <View style={styles.headerGopay}>
              <IcGopay />
              <Text style={styles.textGopay}>Rp.50.000</Text>
            </View>
            <View style={styles.contentGopay}>
              <GopayFeature title="Pay" type="pay" />
              <GopayFeature title="Nearby" type="nearby" />
              <GopayFeature title="Top Up" type="topup" />
              <GopayFeature title="More" type="more" />
            </View>
          </View>
          {/* Main Features */}
          <View style={styles.featurePage}>
            <View style={styles.menu}>
              <View style={styles.featureWrapper}>
                <View style={styles.iconFeatureWrapper}>
                  <IcBike />
                </View>
                <Text style={styles.textFeature}>Go-Ride</Text>
              </View>
              <View style={styles.featureWrapper}>
                <View style={styles.iconFeatureWrapper}>
                  <IcCar />
                </View>
                <Text style={styles.textFeature}>Go-Car</Text>
              </View>
              <View style={styles.featureWrapper}>
                <View style={styles.iconFeatureWrapper}>
                  <IcDoctor />
                </View>
                <Text style={styles.textFeature}>Go-Doctor</Text>
              </View>
              <View style={styles.featureWrapper}>
                <View style={styles.iconFeatureWrapper}>
                  <IcSend />
                </View>
                <Text style={styles.textFeature}>Go-Send</Text>
              </View>
            </View>
            <View style={styles.menu}>
              <View style={styles.featureWrapper}>
                <View style={styles.iconFeatureWrapper}>
                  <IcDeal />
                </View>
                <Text style={styles.textFeature}>Go-Deal</Text>
              </View>
              <View style={styles.featureWrapper}>
                <View style={styles.iconFeatureWrapper}>
                  <IcPulsa />
                </View>
                <Text style={styles.textFeature}>Go-Pulsa</Text>
              </View>
              <View style={styles.featureWrapper}>
                <View style={styles.iconFeatureWrapper}>
                  <IcFood />
                </View>
                <Text style={styles.textFeature}>Go-Food</Text>
              </View>
              <View style={styles.featureWrapper}>
                <View style={styles.iconFeatureWrapper}>
                  <IcMore />
                </View>
                <Text style={styles.textFeature}>More</Text>
              </View>
            </View>
          </View>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 3}}
          />
          {/* Section News */}
          <Gap height={25} />
          <View>
            <Image source={IlBannerNews} style={styles.IlNews} />
            <IcLogoGojek style={styles.IlLogoGojek} />
            <View>
              <Text style={styles.titleTextNews}>Go-News</Text>
              <Text style={styles.contentTextNews}>
                Tim Jaguar dan Buru Sergap Gerebek Rumah Untuk Ritual Santet Di
                Depok.
              </Text>
              <View style={styles.button}>
                <Button title="read" />
              </View>
            </View>
          </View>
          <Line />
          <View>
            <Image source={IlBannerFootball} style={styles.IlNews} />
            <IcLogoGojek style={styles.IlLogoGojek} />
            <View>
              <Text style={styles.titleTextNews}>Euro 2021</Text>
              <Text style={styles.contentTextNews}>
                Tim Perancis Menang Atas Tim Portugal.
              </Text>
              <View style={styles.button}>
                <Button title="read" style={styles.buttonGoFood} />
              </View>
            </View>
          </View>
          {/* Go Food Banner Section */}
          <Line />
          <View>
            <ImageBackground
              source={IlBannerGoFood}
              style={styles.bannerGoFodd}
              imageStyle={styles.ImageBackground}>
              <IcLogoGoFood style={styles.IlLogoGoFod} />
              <View style={styles.textWrapperGoFood}>
                <View>
                  <Text style={styles.titleGoFood}>Free GO-FOOD Voucher</Text>
                  <Text style={styles.subTitleGoFood}>
                    Quick, Before the run out
                  </Text>
                </View>
                <Button title="Get Voucher" />
              </View>
            </ImageBackground>
          </View>
          <Line />
          {/* Nearby Restaurant Section */}
          <View>
            <View>
              <IcLogoGoFood />
              <View style={styles.textWrapperNearby}>
                <Text style={styles.titleNearby}>Nearby Restaurants</Text>
                <Text style={styles.subTitleNearby}>See All</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View style={styles.WrapperNearbyRestaurant}>
                  <View style={styles.imageTextWrapperRestaurant}>
                    <Image source={IlRes1} style={styles.imageRestaurant} />
                    <Text style={styles.textRestaurant}>RM. Minang Raya</Text>
                  </View>
                  <View style={styles.imageTextWrapperRestaurant}>
                    <Image source={IlRes2} style={styles.imageRestaurant} />
                    <Text style={styles.textRestaurant}>RM. Kabayan</Text>
                  </View>
                  <View style={styles.imageTextWrapperRestaurant}>
                    <Image source={IlRes3} style={styles.imageRestaurant} />
                    <Text style={styles.textRestaurant}>RM. Kafe Kita</Text>
                  </View>
                  <View style={styles.imageTextWrapperRestaurant}>
                    <Image source={IlRes4} style={styles.imageRestaurant} />
                    <Text style={styles.textRestaurant}>Mc Donal Senen</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
          <Line />
        </View>
      </ScrollView>
      <View style={styles.bottomNavigator}>
        <View style={styles.iconBottom}>
          <TouchableOpacity style={styles.boxIconBottom} activeOpacity={0.6}>
            <IcHomeActive />
          </TouchableOpacity>
          <Text style={styles.textIconBottom}>Home</Text>
        </View>
        <View style={styles.iconBottom}>
          <TouchableOpacity style={styles.boxIconBottom} activeOpacity={0.6}>
            <IcOrderActive />
          </TouchableOpacity>
          <Text style={styles.textIconBottom}>Orders</Text>
        </View>
        <View style={styles.iconBottom}>
          <TouchableOpacity style={styles.boxIconBottom} activeOpacity={0.6}>
            <IcInboxActive />
          </TouchableOpacity>
          <Text style={styles.textIconBottom}>Inbox</Text>
        </View>
        <View style={styles.iconBottom}>
          <TouchableOpacity style={styles.boxIconBottom} activeOpacity={0.6}>
            <IcAccountActive />
          </TouchableOpacity>
          <Text style={styles.textIconBottom}>Account</Text>
        </View>
      </View>
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
  bottomNavigator: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
  },
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
  textIconBottom: {
    fontSize: 10,
    color: '#545454',
    marginTop: 4,
  },
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
  sectionGopay: {
    marginTop: 8,
  },
  headerGopay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    backgroundColor: '#2C5FB8',
    padding: 14,
  },
  textGopay: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  contentGopay: {
    flexDirection: 'row',
    backgroundColor: '#2F65BD',
    paddingTop: 20,
    paddingBottom: 14,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  featurePage: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 18,
  },
  menu: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 18,
  },
  featureWrapper: {
    height: 70,
    width: 70,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
  },
  textFeature: {
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  iconFeatureWrapper: {
    padding: 3,
  },
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
  buttonGoFood: {
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  textWrapperNearby: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  titleNearby: {
    color: '#130f40',
    fontSize: 16,
    fontWeight: '600',
  },
  subTitleNearby: {
    color: '#27ae60',
    fontSize: 16,
    fontWeight: '600',
  },
  WrapperNearbyRestaurant: {
    flexDirection: 'row',
  },
  imageTextWrapperRestaurant: {
    marginRight: 14,
  },
  imageRestaurant: {
    width: 160,
    borderRadius: 8,
    marginBottom: 6,
    resizeMode: 'cover',
  },
  textRestaurant: {
    color: '#130f40',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default App;
