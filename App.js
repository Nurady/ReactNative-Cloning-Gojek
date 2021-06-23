import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  IcHomeActive,
  IcOrderActive,
  IcInboxActive,
  IcAccountActive,
  IcSearch,
  IcPromo,
  IcGopay,
  IcPay,
  IcNearby,
  IcTopUp,
  IcMore,
  IcFood,
  IcSend,
  IcBike,
  IcDeal,
  IcPulsa,
  IcCar,
  IcDoctor,
} from './icons';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.page}>
        {/* Search Bar  */}
        <View style={styles.SearchPromoWrapper}>
          <View style={styles.SearchWrapper}>
            <TextInput style={styles.input} placeholder="Masukkan Kata Kunci" />
            <IcSearch style={styles.IcSearch} />
          </View>
          <View style={styles.PromoWrapper}>
            <IcPromo style={styles.IcPromo} />
          </View>
        </View>
        {/* Go Pay */}
        <View style={styles.sectionGopay}>
          <View style={styles.headerGopay}>
            <IcGopay />
            <Text style={styles.textGopay}>Rp.50.000</Text>
          </View>
          <View style={styles.contentGopay}>
            <TouchableOpacity style={styles.bodyGopay}>
              <IcPay />
              <Text style={styles.textGopay}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bodyGopay}>
              <IcNearby />
              <Text style={styles.textGopay}>Nearby</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bodyGopay}>
              <IcTopUp />
              <Text style={styles.textGopay}>Top Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bodyGopay}>
              <IcMore />
              <Text style={styles.textGopay}>More</Text>
            </TouchableOpacity>
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
      </View>
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
    paddingTop: 15,
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
  bodyGopay: {
    flex: 1,
    alignItems: 'center',
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
});

export default App;
