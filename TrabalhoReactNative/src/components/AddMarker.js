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
    <View>
      <TextInput value={name} onChangeText={setName}/>
      <TextInput value={latitude} onChangeText={setLatitude}/>
      <TextInput value={longitude} onChangeText={setLongitude}/>
      <Button onPress={addMarker}>Save</Button>
    </View>
  );
};

export default AddMarker;