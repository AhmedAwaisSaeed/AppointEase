import {create} from 'zustand';

type CustomAlertState = {
  visible: boolean;
  title: string;
  message: string;
  showAlert: (title: string, message: string) => void;
  hideAlert: () => void;
};

export const useCustomAlertStore = create<CustomAlertState>(set => ({
  visible: false,
  title: '',
  message: '',
  showAlert: (title, message) =>
    set({
      visible: true,
      title,
      message,
    }),
  hideAlert: () => set({visible: false, title: '', message: ''}),
}));
