import {Text, View} from 'react-native';
import React from 'react';
// import {styles} from './styles';

interface Props {}

const HomeScreen: React.FC<Props> = props => {
  return (
    <View style={{flex: 1}}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
