import React from 'react';
import { View,ScrollView,StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { MarkersContext } from '../context/MarkersContext';
import { useContext } from 'react';

const MarkersList = ({ navigation }) => {
  const { mymarkers } = useContext(MarkersContext);

  return (
    <ScrollView style={styles.container}>
      <View>
      {mymarkers.map((mymarker) => (
        <Card style={styles.mainCard}
          key={mymarker.id}
          onPress={() => navigation.navigate('MarkerDetails', { marker: mymarker })}
        >
          <Card >
            <Card.Content style={styles.secondaryCard}>
              <Title>{mymarker.nome}</Title>
              <Paragraph>Latitude: {mymarker.latitude}</Paragraph>
              <Paragraph>Longitude: {mymarker.longitude}</Paragraph>
            </Card.Content>
          </Card>
        </Card>
      ))}
    </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    margin: 10, 
    padding:20,
  },
  mainCard: {
    marginTop: 10, 
    marginBottom: 10,
  },
  secondaryCard: {
    borderRadius: 20,
    backgroundColor: '#CECECE',
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 5,
    borderColor: 'black',
    padding: 10,
  }
});

export default MarkersList;