import {StyleSheet} from 'react-native';
import {Theme} from '../../theme/types';

export const getStyles = (props: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: props.primaryBackground.primaryBG,
      paddingHorizontal: 16,
      paddingBottom: 8, // Optional if needed
    },
    iconContainer: {
      padding: 8,
    },
    title: {
      fontSize: 18,
      fontFamily: 'System',
      color: props.text.primaryText,
    },
    placeholder: {
      width: 32, // Matches the size of the icon container
    },
  });
