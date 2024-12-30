import React from 'react';
import {View, Text, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import {CustomAlertProps} from './types';
import {getStyles} from './styles';
import {useTheme} from '../../theme';

const CustomAlert: React.FC<CustomAlertProps> = ({
  visible,
  title,
  message,
  onClose,
  style,
}) => {
  const {theme} = useTheme();
  const styles = getStyles(theme);

  const [fadeAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(onClose);
    }
  }, [visible, fadeAnim, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <Animated.View style={[styles.overlay, {opacity: fadeAnim}, style]}>
      <View style={styles.alertContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {message && <Text style={styles.message}>{message}</Text>}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export {CustomAlert};
