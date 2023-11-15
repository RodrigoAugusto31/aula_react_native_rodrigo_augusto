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

      {mymarkers.map(mymarker => (
        <TouchableOpacity onPress={() => navigation.navigate('MarkerDetails', {marker: mymarker})}>
          <Text>{mymarker.nome} - Marker Details</Text>
        </TouchableOpacity>
      ))}

      <ScrollView style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <Mapbox.Camera 
          zoomLevel={12}
          centerCoordinate={[-43.23021649150746,-22.915567583135044]} />
          <MarkerView coordinate={[-43.23021649150746,-22.915567583135044]}>
              <Text>Marker 01</Text>
            </MarkerView>
            <MarkerView coordinate={[-43.23014685209725,-22.921401149104398]}>
              <Text>Marker 02</Text>
            </MarkerView>
        </Mapbox.MapView>
        <Button onPress={() => navigation.navigate('AddMarker')}>Add marker</Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  card: {
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  map: {
    width: '100%',
    height: 400,
  },
});

export default Map;
