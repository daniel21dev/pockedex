import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
//import { Navigator } from './src/navigation/Navigator';
import { Tabs } from './src/navigation/Tabs';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <Navigator /> */}
        <Tabs />
      </NavigationContainer>
    </View>
  );
};

export default App;
