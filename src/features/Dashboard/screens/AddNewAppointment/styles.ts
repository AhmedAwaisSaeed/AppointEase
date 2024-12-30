import {StyleSheet} from 'react-native';
import {StyleConsts} from '../../../../StyleConsts';
import {Theme} from '../../../../theme/types';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primaryBackground.primaryBG,
    },
    formContainer: {
      paddingHorizontal: StyleConsts.spacing.normal,
      paddingVertical: StyleConsts.spacing.normal,
    },
    inputContainer: {
      marginBottom: StyleConsts.spacing.normal,
    },
    header: {
      marginBottom: StyleConsts.spacing.normal,
    },
    button: {
      marginTop: StyleConsts.spacing.normal,
    },
  });
