import {StyleSheet} from 'react-native';
import {Theme} from '../../../../theme/types';

export const getStyles = (props: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 10,
    },
  });
