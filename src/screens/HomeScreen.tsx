import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Icon name="flask-outline" size={30} color="red" />
      <Button
        title="pocke screen"
        onPress={() => navigate('PockemonScreen' as any)}
      />
    </View>
  );
};
