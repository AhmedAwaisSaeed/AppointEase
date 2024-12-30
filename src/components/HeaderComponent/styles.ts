import {StyleSheet} from 'react-native';
import {StyleConsts} from '../../StyleConsts';
import {Theme} from '../../theme/types';

export const getStyles = (props: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: props.primaryBackground.primaryBG,
      paddingBottom: 8, // Optional if needed
    },
    iconContainer: {
      padding: 8,
    },
    title: {
      fontSize: StyleConsts.fontSize.headerH4Size,
      fontFamily: StyleConsts.fontFamily.coText,
      color: props.text.primaryText,
      textTransform: 'capitalize',
    },
    placeholder: {
      width: 32, // Matches the size of the icon container
    },
    logoutContainer: {
      //   position: 'absolute',
      right: 16,
      //   top: 0,
    },
  });
