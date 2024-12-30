import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {getStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme';
import {HeaderComponent, ButtonComponent} from '../../../../components';
import {useAdminStore} from '../../../../store/AdminStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import StackNames from '../../../../navigation/StackNames';

const ThankYouScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<any>>();
  const {adminData, addFeedback} = useAdminStore();

  const [rating, setRating] = useState<number | null>(null);

  const handleSubmitFeedback = () => {
    if (!rating) {
      Alert.alert(t('common.error'), t('feedback.selectRating'));
      return;
    }

    addFeedback(rating);

    Alert.alert(t('feedback.thankYou'), t('feedback.feedbackSubmitted'), [
      {text: t('common.ok')},
    ]);

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
