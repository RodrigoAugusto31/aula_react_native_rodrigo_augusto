import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderIcon = () => {

    const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('MarkersList')}>
        <View style={styles.container}>
            <Icon name="bars" size={22}/>
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