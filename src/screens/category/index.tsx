import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CATEGORY_SCREEN_NAME} from './constants';

interface Props {}

const CategoryScreen: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text>{CATEGORY_SCREEN_NAME}</Text>
    </View>
  );
};

export default CategoryScreen;
