import React, {useMemo} from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {useAuth} from '../context/AuthProvider';
import {AuthStackNavigator} from './stacks/AuthStack';
import {HomeNavigationStack} from './stacks/HomeNavigationStack';
import StackNames from './StackNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuthStore} from '../store/AuthStore';

/* istanbul ignore next */
export function RootStackNavigator() {
  const {isAuthenticated, userType} = useAuthStore();
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={StackNames.AuthStack}>
      {/* {isAuthenticated && userType ? ( */}
      <RootStack.Screen
        name={StackNames.HomeNavigationStack}
        component={HomeNavigationStack}
        initialParams={{userType}}
      />
      {/* ) : ( */}
      <RootStack.Screen
        name={StackNames.AuthStack}
        component={AuthStackNavigator}
      />
      {/* )} */}
    </RootStack.Navigator>
  );
}

/* istanbul ignore next */
export default function MainNavigator() {
  const navigationRef = createNavigationContainerRef();

  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
