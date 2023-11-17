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
    <View style={{ padding: 50 }}>
      <TextInput style={{ backgroundColor: 'white' }}
        label='Name'
        mode='outlined'
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{ marginTop: 15, backgroundColor: 'white' }}
        textColor='black'
        label='Latitude'
        mode='outlined'
        value={latitude} onChangeText={setLatitude}
      />
      <TextInput
        style={{ marginTop: 15, marginBottom:15, backgroundColor: 'white' }} 
        label='Longitude'
        mode='outlined'
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
        onPress={() => {
          addMarker(); 
          navigation.navigate('Map'); 
        }}
      >
        Save Marker
      </Button>
    </View>
  );
};

export default AddMarker;