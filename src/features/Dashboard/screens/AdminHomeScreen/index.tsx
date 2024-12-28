import React from 'react';
import {View} from 'react-native';
import {getStyles} from './styles';

import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme';

import {HeaderComponent} from '../../../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const AdminHomeScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <HeaderComponent
        title={t('dashboard.admin')}
        // onBackPress={() => navigation.goBack()}
      />
    </View>
  );
};

export {AdminHomeScreen};