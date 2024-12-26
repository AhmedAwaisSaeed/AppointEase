import React, {useMemo} from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {navigationRef} from '../src/components/AuthProvider';
import {AuthStackNavigator} from './stacks/AuthStack';
import StackNames from './StackNames';

/* istanbul ignore next */
export function RootStackNavigator() {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen
        options={{
          animation: 'fade',
        }}
        name={StackNames.AuthStack}
        component={AuthStackNavigator}
      />
    </RootStack.Navigator>
  );
}

/* istanbul ignore next */
export default function MainNavigator() {
  const navigationRef = createNavigationContainerRef();
  const root = useMemo(() => {
    return RootStackNavigator();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>{<>{root}</>}</NavigationContainer>
  );
}
