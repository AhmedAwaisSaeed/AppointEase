import React, {useState} from 'react';
import {
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {getStyles} from './styles';
import {InputComponent} from '../../../../components/InputComponent';
import {ButtonComponent} from '../../../../components/ButtonComponent';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme';
import {adminData} from '../../../../utils/mockData/admin';
import {patientData} from '../../../../utils/mockData/patient';
import {HeaderComponent} from '../../../../components';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<any>>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleLogin = () => {
    console.log('button pressed');
    setTouched(true);
    setLoading(true);

    // Simulate API call delay
    setTimeout(() => {
      const admin = adminData.find(
        user => user.username === username && user.password === password,
      );

      const patient = patientData.find(
        user => user.username === username && user.password === password,
      );

      setLoading(false);

      if (admin) {
        Alert.alert(t('auth.loginSuccess'), t('auth.welcomeAdmin'));
      } else if (patient) {
        Alert.alert(t('auth.loginSuccess'), t('auth.welcomePatient'));
      } else {
        Alert.alert(t('auth.loginFailed'), t('auth.invalidCredentials'));
      }
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidViewcontainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          keyboardShouldPersistTaps="handled">
          <HeaderComponent
            title={t('auth.login')}
            onBackPress={() => navigation.goBack()}
          />
          <View style={styles.container}>
            <InputComponent
              label={t('auth.username')}
              placeholder={t('auth.placeHolderUsername')}
              value={username}
              autoCapitalize="none"
              onChangeText={setUsername}
              errorMessage={
                touched && !username ? t('auth.usernameRequired') : ''
              }
            />

            <InputComponent
              label={t('auth.password')}
              placeholder={t('auth.placeHolderPassword')}
              secureTextEntry
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
              errorMessage={
                touched && !password ? t('auth.passwordRequired') : ''
              }
            />

            <ButtonComponent
              label={t('auth.login')}
              onPress={handleLogin}
              loading={loading}
              disabled={!username || !password || loading}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export {LoginScreen};
