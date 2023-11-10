// Trịnh Gia Bảo - 21521866
import React, {useState} from 'react';
import {View, Text, TextInput, Button, Keyboard, Alert} from 'react-native';
import {useDarkMode} from '../context/theme-context';

const Feedback = props => {
  const [enteredFeedback, setEnteredFeedback] = useState('');
  const {isDarkMode, styles} = useDarkMode();
  const addFeedbackHandler = () => {
    if (enteredFeedback.trim().length > 0) {
      props.onAddFeedback(enteredFeedback);
      setEnteredFeedback('');
      Keyboard.dismiss();
      if (props.isEnabled) {
        Alert.alert('Thank you for your feedback!', '', [
          {
            text: 'OK',
            onPress: () => {
              console.log('OK pressed');
            },
          },
        ]);
      }
    }
  };
  // Trịnh Gia Bảo - 21521866
  return (
    <View style={styles.feedback}>
      <Text style={styles.largeText}>Feedback</Text>
      <TextInput
        style={styles.feedbackInput}
        value={enteredFeedback}
        onChangeText={feedback => setEnteredFeedback(feedback)}
        multiline={true}
        placeholder="Your feedback here..."
        placeholderTextColor={isDarkMode ? '#fff' : '#000'}
      />
      <Button
        style={styles.btn}
        title="SEND FEEDBACK"
        onPress={addFeedbackHandler}
      />
    </View>
  );
};

export default Feedback;
