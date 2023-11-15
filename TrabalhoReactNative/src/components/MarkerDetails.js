import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useRoute} from '@react-navigation/native'

const MarkerDetails = () => {
    const route = useRoute();

    return (
        <View>
            <Text variant="titleLarge">{route.params.marker.nome}</Text>
            <Text variant="titleLarge">{route.params.marker.latitude}</Text>
            <Text variant="titleLarge">{route.params.marker.longitude}</Text>
        </View>
    );
};

export default MarkerDetails;