import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map</Text>
      <Icon name="globe" size={22} />
    </View>
  );
};

export default Header;