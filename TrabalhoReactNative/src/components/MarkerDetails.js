import React from 'react';
import {View} from 'react-native';
import {Text, Card, Title, Paragraph} from 'react-native-paper';
import {useRoute} from '@react-navigation/native'

const MarkerDetails = () => {
    const route = useRoute();

    return (
        <View style={{ margin: 10, padding:50 }}>
        <Card.Content style={{ borderRadius: 20, backgroundColor: '#CECECE',borderWidth: 2, borderColor: 'black', padding: 10 }}>
            <Title style={{ fontWeight: 'bold' }}>Name:</Title>
            <Paragraph>{route.params.marker.nome}</Paragraph>
        </Card.Content>
    
        <Card.Content style={{ borderRadius: 20, backgroundColor: '#CECECE', marginTop: 10, borderWidth: 2, borderColor: 'black', padding: 10 }}>
            <Title style={{ fontWeight: 'bold' }}>Latidude:</Title>
          <Paragraph>{route.params.marker.latitude}</Paragraph>
        </Card.Content>
    
        <Card.Content style={{ borderRadius: 20, backgroundColor: '#CECECE', marginTop: 10, borderWidth: 2, borderColor: 'black', padding: 10 }}>
            <Title style={{ fontWeight: 'bold' }}>Longitude:</Title>
          <Paragraph>{route.params.marker.longitude}</Paragraph>
        </Card.Content>
      </View>
    );
};

export default MarkerDetails;