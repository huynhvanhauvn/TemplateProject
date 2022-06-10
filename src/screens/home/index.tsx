import {Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {FetchSampleAPI} from './redux/actions';
import {ChangLanguage} from 'rootRedux/actions';
import {Tr} from 'shared/language';
// import {styles} from './styles';

interface Props {}

const HomeScreen: React.FC<Props> = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(ChangLanguage.get('vi'))}>
        <Text style={{color: 'white'}}>Set vi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(ChangLanguage.get('en'))}>
        <Text style={{color: 'white'}}>Set en</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => dispatch(FetchSampleAPI.get())}>
        <Text style={{color: 'white'}}>{Tr('home:fetchAPI')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
