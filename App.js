// Trịnh Gia Bảo - 21521866
import React from 'react';
import {ThemeContextProvider} from './context/theme-context';
import HomeScreen from './components/HomeScreen';

const App = () => {
  return (
    <ThemeContextProvider>
      <HomeScreen />
    </ThemeContextProvider>
  );
};

export default App;
