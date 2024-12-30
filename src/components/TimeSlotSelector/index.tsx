import React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {TimeSlotSelectorProps} from './types';
import {getStyles} from './styles';
import {useTheme} from '../../theme';

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({
  label,
  timeSlots,
  selectedTime,
  onTimeSelect,
  errorMessage,
  style,
}) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={[styles.container, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <FlatList
        horizontal
        data={timeSlots}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.timeSlot,
              selectedTime === item && styles.selectedTimeSlot,
            ]}
            onPress={() => onTimeSelect(item)}>
            <Text
              style={[
                styles.timeSlotText,
                selectedTime === item && styles.selectedTimeSlotText,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        showsHorizontalScrollIndicator={false}
      />
      {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
    </View>
  );
};

export {TimeSlotSelector};
