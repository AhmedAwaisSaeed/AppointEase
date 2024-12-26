import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {InputComponentProps} from './types';
import {getStyles} from './styles';
import {useTheme} from '../../theme';

const InputComponent: React.FC<InputComponentProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  errorMessage,
  style,
  ...rest
}) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export {InputComponent};
