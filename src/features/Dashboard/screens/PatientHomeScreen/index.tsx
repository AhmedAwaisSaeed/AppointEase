import React, {useCallback} from 'react';
import {View, FlatList, Text} from 'react-native';
import {getStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme';
import {HeaderComponent, ButtonComponent} from '../../../../components';
import {useAdminStore} from '../../../../store/AdminStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ScreenNames from '../../../../navigation/ScreenNames';
import {useFocusEffect} from '@react-navigation/native';
import {useAuthStore} from '../../../../store/AuthStore';
import StackNames from '../../../../navigation/StackNames';
import {useCustomAlertStore} from '../../../../store/CustomAlertStore';

const PatientHomeScreen = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {t} = useTranslation();
  const navigation = useNavigation<NavigationProp<any>>();
  const {adminData, loadAdminData} = useAdminStore() || {};
  const {logout} = useAuthStore();
  const {showAlert} = useCustomAlertStore();

  useFocusEffect(
    useCallback(() => {
      loadAdminData();
    }, [loadAdminData]),
  );

  const handleEditAppointment = (appointmentId: number) => {
    const selectedAppointment = adminData?.[0]?.appointments.find(
      appointment => appointment.id === appointmentId,
    );
    if (selectedAppointment) {
      navigation.navigate(ScreenNames.AddNewAppointment, {
        editMode: true,
        appointment: selectedAppointment,
      });
    }
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
          label={t('common.edit')}
          onPress={() => handleEditAppointment(item.id)}
          style={styles.editButton}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderComponent onLogout={handleLogout} title={t('dashboard.patient')} />
      <FlatList
        data={adminData[0]?.appointments || []}
        showsVerticalScrollIndicator={false}
        renderItem={renderAppointmentItem}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={
          <Text style={styles.noAppointmentsText}>
            {t('appointments.noAppointments')}
          </Text>
        }
        contentContainerStyle={styles.listContainer}
      />
      <ButtonComponent
        label={t('appointments.addNew')}
        onPress={() => navigation.navigate(ScreenNames.AddNewAppointment)}
        style={styles.addButton}
      />
    </View>
  );
};

export {PatientHomeScreen};
