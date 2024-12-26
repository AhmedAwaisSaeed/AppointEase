import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../features/Auth/screens/LoginScreen';
import ScreenNames from '../ScreenNames';
import React from 'react';

export function AuthStackNavigator() {
  const AuthStack = createNativeStackNavigator<AuthStackParamList>();
  return (
    <AuthStack.Navigator
      initialRouteName={ScreenNames.LoginScreen}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen
        name={ScreenNames.LoginScreen}
        component={LoginScreen}
      />
    </AuthStack.Navigator>
  );
}

export type AuthStackParamList = {
  [ScreenNames.LoginScreen]: undefined;
};
