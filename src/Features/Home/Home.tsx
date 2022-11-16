import {View, Text} from 'react-native';
import React from 'react';

export const Home = props => {
  const userInfo = props?.route?.params?.userInfo;
  return (
    <View>
      <Text>Your Data</Text>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
    </View>
  );
};
