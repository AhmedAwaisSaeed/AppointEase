import {StyleSheet} from 'react-native';
import {Theme} from '../../../../theme/types';

export const getStyles = (props: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      marginTop: '30%',
      marginHorizontal: 10,
    },
    keyboardAvoidViewcontainer: {
      flex: 1,
    },
    scrollViewContainer: {
      flexGrow: 1,
    },
  });
