import {StyleSheet} from 'react-native';
import {Theme} from '../../../../theme/types';

export const getStyles = (props: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: props.primaryBackground.primaryBG,
    },
    keyboardAvoidViewcontainer: {
      flex: 1,
    },
    scrollViewContainer: {
      flexGrow: 1,
    },
    buttonStyle: {
      marginHorizontal: 10,
    },
  });
