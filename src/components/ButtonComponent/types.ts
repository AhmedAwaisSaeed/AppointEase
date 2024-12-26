import {TouchableOpacityProps} from 'react-native';

export interface ButtonComponentProps extends TouchableOpacityProps {
  label: string; // Text displayed on the button
  onPress: () => void; // Callback for button press
  disabled?: boolean; // Disable button interaction
  loading?: boolean; // Show a loading spinner
  style?: object; // Custom styles for button
  textStyle?: object; // Custom styles for label text
}
