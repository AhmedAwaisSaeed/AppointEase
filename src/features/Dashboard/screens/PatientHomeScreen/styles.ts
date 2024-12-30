import {StyleSheet} from 'react-native';
import {StyleConsts} from '../../../../StyleConsts';
import {Theme} from '../../../../theme/types';

export const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.primaryBackground.primaryBG,
    },
    listContainer: {
      padding: StyleConsts.spacing.normal,
    },
    appointmentCard: {
      padding: StyleConsts.spacing.normal,
      backgroundColor: theme.cards.shadowColor,
      borderRadius: StyleConsts.spacing.normal,
      marginBottom: StyleConsts.spacing.normal,
      shadowColor: theme.shadow.shadowColor,
      shadowOpacity: 0.1,
      shadowRadius: StyleConsts.spacing.normal,
      elevation: 2,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: StyleConsts.spacing.normal,
    },
    headingText: {
      color: theme.text.primaryText,
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coTextBold,
      marginBottom: StyleConsts.spacing.normal,
    },
    valueText: {
      color: theme.text.primaryText,
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
      marginBottom: StyleConsts.spacing.normal,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: StyleConsts.spacing.normal,
    },
    editButton: {
      backgroundColor: theme.buttons.primaryButton,
    },
    deleteButton: {
      backgroundColor: theme.buttons.deleteButton,
    },
    addButton: {
      margin: StyleConsts.spacing.normal,
      marginBottom: 30,
      marginHorizontal: 20,
    },
    noAppointmentsText: {
      textAlign: 'center',
      color: theme.text.secondaryText,
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
    },
  });
