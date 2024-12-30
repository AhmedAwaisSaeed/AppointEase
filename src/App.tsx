import React from 'react';
import './i18n';
import MainNavigator from './navigation/MainNavigator';
import {ThemeProvider} from './theme';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthProvider} from './context/AuthProvider';
import CustomAlertProvider from './context/CustomAlertProvider';

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <CustomAlertProvider>
            <MainNavigator />
          </CustomAlertProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
