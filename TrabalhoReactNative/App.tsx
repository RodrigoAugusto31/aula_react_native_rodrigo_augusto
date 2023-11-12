/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {PaperProvider, MD3DarkTheme as DefaultTheme} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './src/components/Main';
import Header from './src/components/Header';
import EditMarker from './src/components/EditMarker';

const theme = {
  ...DefaultTheme,
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00',
  },
};

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Main"
          screenOptions={{
            headerTitle: Header,
          }}>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="EditMarker" component={EditMarker} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
