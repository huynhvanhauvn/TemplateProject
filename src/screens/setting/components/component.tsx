import {Text, View} from 'react-native';
import React from 'react';

interface Props {}

const defaultProps = {};

const Component: Props = props => {
  return (
    <View>
      <Text>Component</Text>
    </View>
  );
};

Component.defaultProps = defaultProps;

export default Component;
