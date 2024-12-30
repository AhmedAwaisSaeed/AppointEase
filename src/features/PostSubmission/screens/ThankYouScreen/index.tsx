import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {getStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme';
import {
  HeaderComponent,
  ButtonComponent,
  CustomAlert,
} from '../../../../components';
import {useAdminStore} from '../../../../store/AdminStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import StackNames from '../../../../navigation/StackNames';
import {useCustomAlertStore} from '../../../../store/CustomAlertStore';

const ThankYouScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {t} = useTranslation();
  const {showAlert} = useCustomAlertStore();
  const navigation = useNavigation<NavigationProp<any>>();
  const {adminData, addFeedback} = useAdminStore();

  const [rating, setRating] = useState<number | null>(null);

  const handleSubmitFeedback = () => {
    if (!rating) {
      showAlert(t('common.error'), t('feedback.selectRating'));
      return;
    }

    addFeedback(rating);

    showAlert(t('feedback.thankYou'), t('feedback.feedbackSubmitted'));

    navigation.reset({
      index: 0,
      routes: [{name: StackNames.HomeNavigationStack}],
    });
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        onBackPress={() => navigation.goBack()}
        title={t('feedback.thankYouTitle')}
      />
      <Text style={styles.message}>{t('feedback.message')}</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map(star => (
          <ButtonComponent
            key={star}
            label={String(star)}
            onPress={() => setRating(star)}
            style={[
              styles.starButton,
              rating === star && styles.selectedStarButton,
            ]}
          />
        ))}
      </View>
      <ButtonComponent
        label={t('feedback.submit')}
        onPress={handleSubmitFeedback}
        disabled={!rating}
      />
    </View>
  );
};

export {ThankYouScreen};
