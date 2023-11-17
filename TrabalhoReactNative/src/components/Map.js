import React, { useContext, useState, useEffect } from 'react';
import {ScrollView, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import Mapbox, {MarkerView} from '@rnmapbox/maps';
import { keys } from '../secrets/Keys';
import { MarkersContext } from '../context/MarkersContext';
import Geolocation from '@react-native-community/geolocation';

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken(keys.MAP_BOX_KEY);

const Map = ({navigation}) => {

  const {mymarkers} = useContext(MarkersContext);
  
  const [userLatitude, setUserLatitude] = useState(null);
  const [userLongitude, setUserLongitude] = useState(null);

  useEffect(() => {
    getCurrentPosition();
  }, []); 

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        setUserLatitude(latitude);
        setUserLongitude(longitude);
      },
      (error) => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      { enableHighAccuracy: true }
    );
  };

  return (
    <View>
      <ScrollView style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <Mapbox.Camera zoomLevel={12} centerCoordinate={[userLongitude, userLatitude]} />
          {mymarkers.map((mymarker) => (
            <MarkerView key={mymarker.id} coordinate={[mymarker.longitude, mymarker.latitude]} >
              <TouchableOpacity
                key={mymarker.id} 
                onPress={() => navigation.navigate('MarkerDetails', { marker: mymarker })}
              >
                <Image
                  source={require('../icons/pointer.png')} 
                  style={styles.icon} 
                />
              </TouchableOpacity>
            </MarkerView>
          ))}
        </Mapbox.MapView>
      </ScrollView>
      <Button
        style={{
          position: 'absolute',
          bottom: 30,
          right: 80,
          left: 80,
          zIndex: 1,
          borderWidth: 2,  
          borderColor: 'black',  
        }}
        mode='contained'
        textColor='black'
        onPress={() => navigation.navigate('AddMarker')}
      >
        Add Marker
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  map: {
    width: '100%',
    height: 600,
  },
  icon: {
    width: 40, 
    height: 40, 
    alignContent:'center'
  },
});

export default Map;
