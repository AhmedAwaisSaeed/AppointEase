import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from '../ScreenNames';
import {AdminHomeScreen} from '../../features/Dashboard/screens/AdminHomeScreen';
import {PatientHomeScreen} from '../../features/Dashboard/screens/PatientHomeScreen';

type HomeStackParamList = {
  [ScreenNames.AdminHomeScreen]: undefined;
  [ScreenNames.PatientHomeScreen]: undefined;
};

type Props = {
  route?: {
    params?: {
      userType: 'admin' | 'patient';
    };
  };
};

export function HomeNavigationStack({route}: Props) {
  const userType = route?.params?.userType || 'patient'; // Default to 'patient'
  const HomeStack = createNativeStackNavigator<HomeStackParamList>();

  return (
    <HomeStack.Navigator
      initialRouteName={
        userType === 'admin'
          ? ScreenNames.AdminHomeScreen
          : ScreenNames.PatientHomeScreen
      }
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name={ScreenNames.AdminHomeScreen}
        component={AdminHomeScreen}
      />
      <HomeStack.Screen
        name={ScreenNames.PatientHomeScreen}
        component={PatientHomeScreen}
      />
    </HomeStack.Navigator>
  );
}
