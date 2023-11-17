import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native'
import { MarkersContext } from '../context/MarkersContext';
import {TouchableOpacity} from 'react-native';
import { useContext } from 'react';


const MarkersList = ({navigation}) => {
    const route = useRoute();

    const {mymarkers} = useContext(MarkersContext);

    return (
      
        <View>
            {mymarkers.map((mymarker) => (
        <TouchableOpacity
          key={mymarker.id} 
          onPress={() => navigation.navigate('MarkerDetails', { marker: mymarker })}
        >
          <Text>{mymarker.nome} - Marker Details</Text>
        </TouchableOpacity>
      ))}
        </View>
    );
};

export default MarkersList;