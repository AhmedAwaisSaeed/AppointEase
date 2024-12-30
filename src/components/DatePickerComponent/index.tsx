import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {DatePickerComponentProps} from './types';
import {getStyles} from './styles';
import {useTheme} from '../../theme';

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({
  label,
  value,
  onDateChange,
  errorMessage,
  style,
  ...rest
}) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <DatePicker
        date={value || new Date()}
        onDateChange={onDateChange}
        mode="date"
        textColor={theme.text.primaryText}
        {...rest}
      />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export {DatePickerComponent};
