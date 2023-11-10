// Trịnh Gia Bảo - 21521866
import React from 'react';
import {Switch, View, Text} from 'react-native';
import {useDarkMode} from '../context/theme-context';

const Setting = props => {
  const {styles} = useDarkMode();
  return (
    <View style={styles.setting}>
      <Text style={styles.normalText}>{props.name}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#ACEAE5'}}
        thumbColor={props.value ? '#06D7C6' : '#f4f3f4'}
        onValueChange={props.onToggleHandler}
        value={props.value}
      />
    </View>
  );
};

export default Setting;
