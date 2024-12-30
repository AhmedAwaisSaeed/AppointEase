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
    message: {
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
      color: theme.text.primaryText,
      marginBottom: StyleConsts.spacing.normal,
      textAlign: 'center',
    },
    ratingContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: StyleConsts.spacing.normal,
    },
    starButton: {
      backgroundColor: theme.buttons.secondaryButton,
      padding: StyleConsts.spacing.normal,
      marginHorizontal: StyleConsts.spacing.normal,
    },
    selectedStarButton: {
      backgroundColor: theme.buttons.primaryButton,
    },
  });
