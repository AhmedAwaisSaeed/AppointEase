import {StyleSheet} from 'react-native';
import {StyleConsts} from '../../StyleConsts';
import {Theme} from '../../theme/types';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginVertical: StyleConsts.spacing.normal,
    },
    label: {
      color: theme.text.primaryText,
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
      marginBottom: StyleConsts.spacing.normal,
    },
    timeSlot: {
      padding: StyleConsts.spacing.normal,
      marginHorizontal: StyleConsts.spacing.normal,
      backgroundColor: theme.text.greyText,
      borderWidth: 1,
      borderColor: theme.borderOutlines.borderOutlines,
      borderRadius: StyleConsts.spacing.normal,
    },
    selectedTimeSlot: {
      backgroundColor: theme.primaryBackground.primaryBG,
    },
    timeSlotText: {
      color: theme.text.primaryText,
    },
    selectedTimeSlotText: {
      color: theme.text.primaryText,
    },
    error: {
      color: theme.text.errorMsg,
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
      marginTop: StyleConsts.spacing.normal,
    },
  });
