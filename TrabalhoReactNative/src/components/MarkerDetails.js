import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {useRoute} from '@react-navigation/native'

const MarkerDetails = () => {
    const route = useRoute();

    return (
        <View style={styles.container}>
        <Card.Content style={styles.card}>
            <Title style={styles.title}>Name:</Title>
            <Paragraph>{route.params.marker.nome}</Paragraph>
        </Card.Content>
    
        <Card.Content style={styles.card}>
            <Title style={styles.title}>Latidude:</Title>
          <Paragraph>{route.params.marker.latitude}</Paragraph>
        </Card.Content>
    
        <Card.Content style={styles.card}>
            <Title style={styles.title}>Longitude:</Title>
          <Paragraph>{route.params.marker.longitude}</Paragraph>
        </Card.Content>
      </View>
    );
};

const styles = StyleSheet.create({
  container: { 
    padding:40,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#CECECE',
    marginTop: 10,
    borderWidth: 3,
    borderColor: 'black',
    padding: 10
  },
  title: {
    fontWeight: 'bold'
  }
});


export default MarkerDetails;