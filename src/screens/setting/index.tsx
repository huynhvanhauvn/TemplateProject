import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {SETTING_SCREEN_NAME} from './constants';

interface Props {}

const SettingScreen: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text>{SETTING_SCREEN_NAME}</Text>
    </View>
  );
};

export default SettingScreen;
