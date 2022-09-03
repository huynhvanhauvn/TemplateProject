import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
// import {styles} from './styles';

interface Props {}

const HomeScreen: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity style={styles.btn}>
        <Text style={{color: 'white'}}>Fetch API</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
