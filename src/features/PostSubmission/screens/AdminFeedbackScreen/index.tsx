import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme';
import {HeaderComponent} from '../../../../components';
import {useAdminStore} from '../../../../store/AdminStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const AdminFeedbackScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<any>>();
  const {calculateFeedbackStats, loadAdminData} = useAdminStore();
  const [stats, setStats] = useState<{average: number; total: number}>({
    average: 0,
    total: 0,
  });

  useEffect(() => {
    loadAdminData();
    const feedbackStats = calculateFeedbackStats();
    setStats(feedbackStats);
  }, [calculateFeedbackStats, loadAdminData]);

  return (
    <View style={styles.container}>
      <HeaderComponent
        onBackPress={() => navigation.goBack()}
        title={t('feedback.adminFeedbackTitle')}
      />
      <Text style={styles.stats}>
        {t('feedback.averageRating')}: {stats.average.toFixed(1)}
      </Text>
      <Text style={styles.stats}>
        {t('feedback.totalFeedback')}: {stats.total}
      </Text>
    </View>
  );
};

export {AdminFeedbackScreen};
