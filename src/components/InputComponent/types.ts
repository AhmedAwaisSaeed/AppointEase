import {TextInputProps} from 'react-native';

export interface InputComponentProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  errorMessage?: string;
  style?: object;
}
