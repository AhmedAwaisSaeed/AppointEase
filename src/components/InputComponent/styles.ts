import {StyleSheet} from 'react-native';
import {StyleConsts} from '../../StyleConsts';
import {Theme} from '../../theme/types';

export const getStyles = (props: Theme) =>
  StyleSheet.create({
    container: {
      marginBottom: 16,
      paddingHorizontal: 5,
      paddingBottom: 5,
    },
    label: {
      fontSize: StyleConsts.fontSize.titleH1Size,
      fontFamily: StyleConsts.fontFamily.coText,
      lineHeight: StyleConsts.lineHeight.lineHeight24,
      color: props.text.primaryText,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      fontFamily: StyleConsts.fontFamily.coText,
      fontSize: StyleConsts.fontSize.titleH1Size,
      lineHeight: StyleConsts.lineHeight.lineHeight16,
      color: props.text.placeholderText,
    },
    error: {
      color: props.text.errorMsg,
      fontSize: StyleConsts.fontSize.titleH3Size,
      lineHeight: StyleConsts.lineHeight.lineHeight12,
      paddingVertical: 10,
    },
  });
