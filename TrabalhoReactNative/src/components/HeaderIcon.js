import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';

const HeaderIcon = () => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MarkersList')}>
        <View style={styles.container}>
          <Image
            source={require('../icons/lista.png')}
            style={{ width: 35, height: 35 }}
          />
        </View>
    </TouchableOpacity>
  );
};

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

export default HeaderIcon;