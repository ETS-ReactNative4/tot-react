import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, Dimensions, Alert } from 'react-native';

import MapView, { Marker, Callout } from 'react-native-maps';

import flagImg from '../assets/images/flag-pink.png';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 13.8847007;
const LONGITUDE = 100.5755656;
const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapScreen extends Component {

  static navigationOptions = {
    title: 'แผนที่',
    headerStyle: {
      backgroundColor: '#00802b',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={styles.container}>

        <MapView
          style={styles.map}
          region={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
        <Marker
        coordinate={{
          latitude: LATITUDE,
          longitude: LONGITUDE
        }}
        image={flagImg}
        >
        <Callout>
          <View>
            <Text style={{fontSize:20}}>TOT สำนักงานใหญ่</Text>
          </View>
        </Callout>
        </Marker>
         

        </MapView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});