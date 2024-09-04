import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, SafeAreaView } from 'react-native';
import Button from './src/component/Button';
import MyKeyBoard from './src/component/MyKeyBoard';
import { ThemeContext } from './src/context/ThemeContext';
import { MyColors } from './src/styles/colors';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, { backgroundColor: '#17171C' }]}>
        <Text style={theme === 'light' ? styles.textLight : styles.textDark}>
        Change  Mode
        </Text>
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyBoard/>
        
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textLight: {
    color: '#000', // Black text for light theme
  },
  textDark: {
    color: '#FFF', // White text for dark theme
  },
});
