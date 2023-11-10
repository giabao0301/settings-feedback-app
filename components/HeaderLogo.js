// Trịnh Gia Bảo - 21521866
import React from 'react';
import {Image, Text, View} from 'react-native';
import {useDarkMode} from '../context/theme-context';

const Logo = () => {
  const {styles} = useDarkMode();
  return (
    <View style={styles.header_logo}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.header}>React Native App</Text>
    </View>
  );
};

export default Logo;
