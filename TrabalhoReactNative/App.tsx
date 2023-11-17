import {NavigationContainer} from '@react-navigation/native';
import React, { useState } from 'react';
import {PaperProvider, MD3DarkTheme as DefaultTheme} from 'react-native-paper';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Map from './src/components/Map';
import Header from './src/components/Header';
import AddMarker from './src/components/AddMarker';
import MarkerDetails from './src/components/MarkerDetails';
import { MarkersContext } from './src/context/MarkersContext';
import { markers } from './src/data/markers';
import { Marker } from './src/type/marker';
import MarkersList from './src/components/MarkersList';

const theme = {
  ...DefaultTheme,
  colors: {
    primary: '#CECECE',
    secondary: '#000000',
  },
};

const StackNavigator = createNativeStackNavigator();

function App(): JSX.Element {

  const [mymarkers, setMarkers] = useState<Array<Marker>>([]);

  return (
    <PaperProvider theme={theme}>
      <MarkersContext.Provider value={{
        mymarkers,
        setMarkers
      }}>
        <NavigationContainer>
          <StackNavigator.Navigator>
            <StackNavigator.Screen name="Map" component={Map} />
            <StackNavigator.Screen name="AddMarker" component={AddMarker} />
            <StackNavigator.Screen name="MarkerDetails" component={MarkerDetails} />
            <StackNavigator.Screen name="MarkersList" component={MarkersList} />
          </StackNavigator.Navigator>
        </NavigationContainer>
      </MarkersContext.Provider>
    </PaperProvider>
  );
}

export default App;
