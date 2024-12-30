import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {DropdownComponentProps} from './types';
import {getStyles} from './styles';
import {useTheme} from '../../theme';

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  label,
  options,
  selectedValue,
  onValueChange,
  placeholder,
  errorMessage,
  style,
}) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={styles.picker}>
          {placeholder && <Picker.Item label={placeholder} value={null} />}
          {options.map(option => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
            />
          ))}
        </Picker>
      </View>
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export {DropdownComponent};
