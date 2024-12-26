import {TextInputProps} from 'react-native';

export interface InputComponentProps extends TextInputProps {
  label?: string; // Label for the input field
  value: string; // Current value of the input
  onChangeText: (text: string) => void; // Callback for text change
  placeholder?: string; // Placeholder text
  keyboardType?: TextInputProps['keyboardType']; // Keyboard type
  secureTextEntry?: boolean; // Password field
  errorMessage?: string; // Error message to display
  style?: object; // Additional custom styles
}
