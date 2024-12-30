import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScreenNames from '../ScreenNames';
import {AdminHomeScreen} from '../../features/Dashboard/screens/AdminHomeScreen';
import {PatientHomeScreen} from '../../features/Dashboard/screens/PatientHomeScreen';
import {AddNewAppointment} from '../../features/Dashboard/screens/AddNewAppointment';
import {ThankYouScreen} from '../../features/PostSubmission/screens/ThankYouScreen';
import {AdminFeedbackScreen} from '../../features/PostSubmission/screens/AdminFeedbackScreen';

type HomeStackParamList = {
  [ScreenNames.AdminHomeScreen]: undefined;
  [ScreenNames.PatientHomeScreen]: undefined;
  [ScreenNames.AddNewAppointment]: undefined;
  [ScreenNames.ThankYouScreen]: undefined;
  [ScreenNames.AdminFeedbackScreen]: undefined;
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

      <HomeStack.Screen
        name={ScreenNames.AddNewAppointment}
        component={AddNewAppointment}
      />

      <HomeStack.Screen
        name={ScreenNames.ThankYouScreen}
        component={ThankYouScreen}
      />

      <HomeStack.Screen
        name={ScreenNames.AdminFeedbackScreen}
        component={AdminFeedbackScreen}
      />
    </HomeStack.Navigator>
  );
}
