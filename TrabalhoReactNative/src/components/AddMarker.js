import React, { useRef, useState, useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import { MarkersContext } from '../context/MarkersContext';

const AddMarker = () => {
  const nameInputRef = useRef(null);

const {mymarkers, setMarkers} = useContext(MarkersContext);

const [name, setName] = useState('');
const [latitude, setLatitude] = useState('');
const [longitude, setLongitude] = useState('');

  const addMarker = () => {
    setMarkers([
      ...mymarkers,
      {
        nome: name,
        latitude: latitude,
        longitude:longitude,
      }
    ]);
  };


  return (
    <View style={styles.container}>
      <TextInput
        ref={nameInputRef}
        style={styles.inputText}
        label='Name'
        mode='outlined'
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.inputText}
        textColor='black'
        label='Latitude'
        mode='outlined'
        value={latitude}
        onChangeText={setLatitude}
      />
      <TextInput
        style={styles.inputText}
        label='Longitude'
        mode='outlined'
        value={longitude}
        onChangeText={setLongitude}
      />
      <Button
        style={styles.button}
        mode='contained'
        textColor='black'
        onPress={() => {
          addMarker();
          setName('');
          setLatitude('');
          setLongitude('');
          nameInputRef.current.focus();
        }}
      >
        Save Marker
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    padding: 50
  },
  inputText: {
    marginTop: 15,
    backgroundColor: 'white',
  },
  button: {
    borderWidth: 3,
    marginTop: 15,
    borderColor: 'black',
  }
});

export default AddMarker;