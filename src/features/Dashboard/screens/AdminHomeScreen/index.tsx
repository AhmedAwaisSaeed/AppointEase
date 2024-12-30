import React, {useEffect} from 'react';
import {View, FlatList, Text} from 'react-native';
import {getStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme';
import {HeaderComponent, ButtonComponent} from '../../../../components';
import {useAdminStore} from '../../../../store/AdminStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ScreenNames from '../../../../navigation/ScreenNames';
import {useAuthStore} from '../../../../store/AuthStore';
import StackNames from '../../../../navigation/StackNames';
import {useCustomAlertStore} from '../../../../store/CustomAlertStore';

const AdminHomeScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<any>>();
  const {adminData, loadAdminData, updateAppointmentStatus} = useAdminStore();
  const {logout} = useAuthStore();
  const {showAlert} = useCustomAlertStore();

  useEffect(() => {
    loadAdminData();
  }, [loadAdminData]);

  const handleUpdateStatus = (appointmentId: number, newStatus: string) => {
    const updatedAppointments = adminData[0]?.appointments.map(appt =>
      appt.id === appointmentId ? {...appt, status: newStatus} : appt,
    );

    updateAppointmentStatus(adminData[0], updatedAppointments);

    loadAdminData();

    showAlert('', t('appointments.statusUpdated'));
  };

  const handleLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{name: StackNames.AuthStack}],
    });
    showAlert(t('auth.loggedOut'), t('auth.redirectToLogin'));
  };

  const renderAppointmentItem = ({item}: {item: any}) => (
    <View style={styles.appointmentCard}>
      <View style={styles.row}>
        <Text style={styles.headingText}>{t('appointments.patientName')}:</Text>
        <Text style={styles.valueText}>{item.patientName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.headingText}>
          {t('appointments.contactNumber')}:
        </Text>
        <Text style={styles.valueText}>{item.contactNumber}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.headingText}>
          {t('appointments.appointmentDate')}:
        </Text>
        <Text style={styles.valueText}>{item.appointmentDate}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.headingText}>
          {t('appointments.appointmentTime')}:
        </Text>
        <Text style={styles.valueText}>{item.appointmentTime}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.headingText}>{t('appointments.reason')}:</Text>
        <Text style={styles.valueText}>{item.reason}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.headingText}>{t('appointments.status')}:</Text>
        <Text style={styles.valueText}>{item.status}</Text>
      </View>
      <View style={styles.actions}>
        <ButtonComponent
          label={t('appointments.markDone')}
          onPress={() => handleUpdateStatus(item.id, 'Done')}
          disabled={item.status === 'Done'}
          style={styles.doneButton}
        />
        <ButtonComponent
          label={t('appointments.markCancelled')}
          onPress={() => handleUpdateStatus(item.id, 'Cancelled')}
          disabled={item.status === 'Cancelled'}
          style={styles.cancelButton}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderComponent onLogout={handleLogout} title={t('dashboard.admin')} />
      <FlatList
        data={adminData[0]?.appointments || []}
        renderItem={renderAppointmentItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.noAppointmentsText}>
            {t('appointments.noAppointments')}
          </Text>
        }
        contentContainerStyle={styles.listContainer}
      />

      <ButtonComponent
        label={t('feedback.viewFeedback')}
        onPress={() => navigation.navigate(ScreenNames.AdminFeedbackScreen)}
        style={styles.feedbackButton}
      />
    </View>
  );
};

export {AdminHomeScreen};
