import React, {useState} from 'react';
import {View} from 'react-native';
import HeaderLogo from './HeaderLogo';
import Feedback from './Feedback';
import FAQList from './FAQList';
import {useDarkMode} from '../context/theme-context';
import Setting from './Setting';

const HomeScreen = () => {
  const {isDarkMode, onDarkMode, styles} = useDarkMode();

  const [isEnabledNotification, setIsEnabledNotification] = useState(false);
  const [feedbackList, setFeedbackList] = useState([]);

  const notificationHandler = () => {
    setIsEnabledNotification(prevState => !prevState);
  };

  const addFeedbackHandler = enteredFeedback => {
    setFeedbackList(prevState => {
      return [
        {
          title: enteredFeedback,
          id: Math.random().toString(),
        },
        ...prevState,
      ];
    });
  };
  return (
    <View style={styles.body}>
      <HeaderLogo />
      <Setting
        name="Dark Mode"
        value={isDarkMode}
        onToggleHandler={onDarkMode}
      />
      <Setting
        name="Notifications"
        value={isEnabledNotification}
        onToggleHandler={notificationHandler}
      />
      <Feedback
        isEnabled={isEnabledNotification}
        onAddFeedback={addFeedbackHandler}
      />
      <FAQList data={feedbackList} />
    </View>
  );
};

export default HomeScreen;
