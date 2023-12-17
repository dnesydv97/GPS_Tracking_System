/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {ThemeProvider} from 'styled-components';
import {Theme} from './src/utils';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Routes from './src/route';
// import SyncService from './src/services/SyncService';
const theme = Theme.createTheme();
const App = () => {
  // useEffect(() => {
  //   // Start background synchronization when the app mounts
  //   SyncService.startBackgroundSync();
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
