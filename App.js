import React from 'react';
import { StyleSheet, View, PermissionsAndroid, Dimensions, Platform } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const { width, height } = Dimensions.get('screen');

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
      onMapReady={() => {
        Platform.OS === 'android' ? 
          PermissionsAndroid
          .request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
          .then(() => console.log('Usuário android aceitou!'))
        : Permission.request(Permission.PERMISSIONS.ACCESS_FINE_LOCATION)
          .then(() => console.log('Usuário IOS aceitou!'));
      }}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: width,
    height: height
  }
});
