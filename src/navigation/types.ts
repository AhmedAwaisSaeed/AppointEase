import StackNames from './StackNames';

export type RootNavigatorParamList = {
  [StackNames.AuthStack]: undefined;
  [StackNames.HomeNavigationStack]: {userType: 'admin' | 'patient'};
};
