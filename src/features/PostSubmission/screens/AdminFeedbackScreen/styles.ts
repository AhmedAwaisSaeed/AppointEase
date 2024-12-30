import {StyleSheet} from 'react-native';
import {StyleConsts} from '../../../../StyleConsts';
import {Theme} from '../../../../theme/types';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primaryBackground.primaryBG,
      padding: StyleConsts.spacing.normal,
    },
    stats: {
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
      color: theme.text.primaryText,
      marginVertical: StyleConsts.spacing.normal,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    feedbackCard: {
      padding: StyleConsts.spacing.normal,
      marginVertical: StyleConsts.spacing.normal,
      backgroundColor: theme.primaryBackground.whiteBackground,
      borderRadius: StyleConsts.spacing.normal,
      shadowColor: theme.shadow.shadowColor,
      shadowOpacity: 0.1,
      shadowRadius: StyleConsts.spacing.normal,
      elevation: 3,
    },
    cardText: {
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
      color: theme.text.secondaryText,
    },
  });
