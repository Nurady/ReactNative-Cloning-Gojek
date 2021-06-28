import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Gap} from '../../../components';
import {RNCamera} from 'react-native-camera';

class ScanQRCode extends Component {
  state = {
    barcode: 'More Options',
  };

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };

  render() {
    return (
      <View style={styles.page}>
        {/* <View style={styles.content} /> */}
        <View style={styles.container}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            onBarCodeRead={barcode => {
              console.log(barcode);
              this.setState({
                barcode: barcode.data,
              });
            }}
            // onGoogleVisionBarcodesDetected={({barcodes}) => {
            //   console.log(barcodes);
            // }}
          />
          <View
            style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}>
              <Text style={{fontSize: 14}}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionWrapper}>
          <View style={styles.lineWrapper}>
            <View style={styles.line} />
            <Gap height={3} />
            <View style={styles.line} />
          </View>
          <View style={styles.optionContent}>
            <Text style={styles.text}>{`${this.state.barcode}`}</Text>
            <Text style={styles.text}>Shortcut</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ScanQRCode;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  // content: {
  //   flex: 1,
  //   backgroundColor: '#c8d6e5',
  // },
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
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
