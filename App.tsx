import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Navigator} from './src/navigation/Navigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </View>
  );
};

export default App;
