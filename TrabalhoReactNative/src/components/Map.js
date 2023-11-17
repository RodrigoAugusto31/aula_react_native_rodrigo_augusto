import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Mapbox, {MarkerView} from '@rnmapbox/maps';
import { keys } from '../secrets/Keys';
import { MarkersContext } from '../context/MarkersContext';
import {TouchableOpacity} from 'react-native';
import { useContext } from 'react';

Mapbox.setWellKnownTileServer('Mapbox');
Mapbox.setAccessToken(keys.MAP_BOX_KEY);

const Map = ({navigation}) => {

  const {mymarkers} = useContext(MarkersContext);

  return (
    <View>
      <ScrollView style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <Mapbox.Camera zoomLevel={12} centerCoordinate={[-43.23021649150746, -22.915567583135044]} />
          {mymarkers.map((mymarker) => (
            <MarkerView key={mymarker.id} coordinate={[mymarker.latitude, mymarker.longitude]}>
              <TouchableOpacity
                key={mymarker.id} 
                onPress={() => navigation.navigate('MarkerDetails', { marker: mymarker })}
              >
                <Text>{mymarker.nome}</Text>
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
});

export default Map;
