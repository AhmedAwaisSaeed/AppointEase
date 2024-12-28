import {create} from 'zustand';

type AuthState = {
  isAuthenticated: boolean;
  userType: 'admin' | 'patient' | null;
  login: (userType: 'admin' | 'patient') => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>(set => ({
  isAuthenticated: false,
  userType: null,
  login: userType =>
    set({
      isAuthenticated: true,
      userType,
    }),
  logout: () =>
    set({
      isAuthenticated: false,
      userType: null,
    }),
}));
