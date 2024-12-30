import {StyleSheet} from 'react-native';
import {StyleConsts} from '../../StyleConsts';
import {Theme} from '../../theme/types';

export const getStyles = (props: Theme) =>
  StyleSheet.create({
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    alertContainer: {
      width: '80%',
      backgroundColor: props.primaryBackground.primaryBG,
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
      color: props.text.primaryText,
      marginBottom: 10,
    },
    message: {
      fontSize: StyleConsts.fontSize.titleH2Size,
      fontFamily: StyleConsts.fontFamily.coText,
      color: props.text.secondaryText,
      textAlign: 'center',
      marginBottom: 20,
    },
    closeButton: {
      backgroundColor: props.buttons.primaryButton,
      paddingHorizontal: 20,
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 4,
    },
    closeButtonText: {
      fontSize: StyleConsts.fontSize.titleH2Size,
      fontFamily: StyleConsts.fontFamily.coText,
      lineHeight: StyleConsts.lineHeight.lineHeight28,
      color: props.text.secondaryTextDark,
    },
  });
