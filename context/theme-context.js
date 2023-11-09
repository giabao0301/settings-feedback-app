import React, {useState, createContext, useContext} from 'react';
import {View} from 'react-native';
import {defaultTheme, darkmodeTheme} from '../components/theme';

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const darkModeHandler = () => {
    setIsDarkMode(prevState => !prevState);
  };
  const styles = isDarkMode ? darkmodeTheme : defaultTheme;
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode: isDarkMode,
        onDarkMode: darkModeHandler,
        styles: styles,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(ThemeContext);
};
