import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDarkMode} from '../context/theme-context';

export const FAQItem = ({title}) => {
  const {styles} = useDarkMode();

  return (
    <View style={styles.faqItem}>
      <Text style={styles.normalText}>Q: {title}</Text>
    </View>
  );
};

const FAQList = props => {
  const {styles} = useDarkMode();

  return (
    <View style={styles.faq}>
      <Text style={styles.largeBoldText}>Frequently Asked Questions</Text>
      <FlatList
        data={props.data}
        renderItem={({item}) => <FAQItem title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FAQList;
