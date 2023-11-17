import React from 'react';
import {Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {useState} from 'react';
import { MarkersContext } from '../context/MarkersContext';
import { useContext } from 'react';

const AddMarker = ({navigation}) => {

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
    <View style={{ margin: 10 }}>
      <TextInput
        style={{ marginTop: 5 }}
        label='Name'
        mode='flat'
        value={name} onChangeText={setName}
      />
      <TextInput
        style={{ marginTop: 15 }}
        textColor='black'
        label='Latitude'
        mode='flat'
        value={latitude} onChangeText={setLatitude}
      />
      <TextInput
        style={{ marginTop: 15, marginBottom: 15 }} 
        label='Longitude'
        mode='flat'
        value={longitude} onChangeText={setLongitude}
      />
      <Button
        style={{
          borderWidth: 2,
          marginTop: 15,
          borderColor: 'black',
        }}
        mode='contained'
        textColor='black'
        onPress={addMarker}
      >
        Save
      </Button>
    </View>
  );
};

export default AddMarker;