import React, {useEffect, useState} from 'react';
import {View, ScrollView, Alert} from 'react-native';
import {getStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../../../../theme';
import {
  HeaderComponent,
  InputComponent,
  DatePickerComponent,
  DropdownComponent,
  TimeSlotSelector,
  ButtonComponent,
} from '../../../../components';
import {useAdminStore} from '../../../../store/AdminStore';
import {
  RouteProp,
  NavigationProp,
  useRoute,
  useNavigation,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenNames from '../../../../navigation/ScreenNames';

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
];

const reasons = [
  {label: 'Consultation', value: 'consultation'},
  {label: 'Checkup', value: 'checkup'},
  {label: 'Follow-Up', value: 'followUp'},
];

type AddNewAppointmentRouteProp = RouteProp<
  {params: {editMode?: boolean; appointment?: any}},
  'params'
>;

const AddNewAppointment = () => {
  const {theme} = useTheme();
  const styles = getStyles(theme);
  const {t} = useTranslation();
  const route = useRoute<AddNewAppointmentRouteProp>();
  const navigation = useNavigation<NavigationProp<any>>();

  const {adminData, addAppointment, loadAdminData} = useAdminStore();

  const editMode = route.params?.editMode || false;
  const appointment = route.params?.appointment;

  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState<Date | null>(null);
  const [appointmentTime, setAppointmentTime] = useState('');
  const [reason, setReason] = useState('');
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    loadAdminData();
    if (editMode && appointment) {
      setPatientName(appointment.patientName);
      setContactNumber(appointment.contactNumber);
      setAppointmentDate(new Date(appointment.appointmentDate));
      setAppointmentTime(appointment.appointmentTime);
      setReason(appointment.reason);
    }
  }, [editMode, appointment, loadAdminData]);

  const handleSubmit = () => {
    setTouched(true);

    if (
      !patientName ||
      !contactNumber ||
      !appointmentDate ||
      !appointmentTime ||
      !reason
    ) {
      Alert.alert(t('common.error'), t('appointments.fillAllFields'));
      return;
    }

    if (editMode) {
      // Update existing appointment
      const updatedAppointments = adminData[0]?.appointments.map(appt =>
        appt.id === appointment?.id
          ? {
              ...appt,
              patientName,
              contactNumber,
              appointmentDate:
                appointmentDate?.toISOString().split('T')[0] || '',
              appointmentTime,
              reason,
            }
          : appt,
      );

      // Update state and persist data
      adminData[0].appointments = updatedAppointments;
      AsyncStorage.setItem('adminData', JSON.stringify(adminData)); // Persist data
      Alert.alert(t('appointments.updatedSuccess'), [
        {text: t('common.ok'), onPress: () => navigation.goBack()},
      ]);
    } else {
      // Check for double-booking
      const isDoubleBooked = adminData[0]?.appointments.some(
        appt =>
          appt.appointmentDate ===
            appointmentDate?.toISOString().split('T')[0] &&
          appt.appointmentTime === appointmentTime,
      );

      if (isDoubleBooked) {
        Alert.alert(
          t('appointments.error'),
          t('appointments.doubleBookingError', {
            time: appointmentTime,
          }),
        );
        return;
      }

      // Add new appointment
      const newAppointment = {
        id: new Date().getTime(),
        patientName,
        contactNumber,
        appointmentDate: appointmentDate?.toISOString().split('T')[0] || '',
        appointmentTime,
        reason,
        status: 'Pending',
      };

      // Update state and persist data
      adminData[0]?.appointments.push(newAppointment);
      AsyncStorage.setItem('adminData', JSON.stringify(adminData)); // Persist data
      // Alert.alert(t('appointments.success'), t('appointments.confirmation'), [
      //   {text: t('common.ok'), onPress: clearForm},
      // ]);
      navigation.navigate(ScreenNames.ThankYouScreen);
    }
  };

  const clearForm = () => {
    setPatientName('');
    setContactNumber('');
    setAppointmentDate(null);
    setAppointmentTime('');
    setReason('');
    setTouched(false);
  };

  return (
    <View style={styles.container}>
      <HeaderComponent
        onBackPress={() => navigation.goBack()}
        title={
          editMode
            ? t('appointments.editAppointment')
            : t('appointments.addNew')
        }
      />
      <ScrollView contentContainerStyle={styles.formContainer}>
        <InputComponent
          label={t('appointments.patientName')}
          value={patientName}
          onChangeText={setPatientName}
          placeholder={t('appointments.enterPatientName')}
          errorMessage={
            touched && !patientName ? t('appointments.patientNameRequired') : ''
          }
        />
        <InputComponent
          label={t('appointments.contactNumber')}
          value={contactNumber}
          onChangeText={setContactNumber}
          placeholder={t('appointments.enterContactNumber')}
          keyboardType="phone-pad"
          errorMessage={
            touched && !contactNumber
              ? t('appointments.contactNumberRequired')
              : ''
          }
        />
        <DatePickerComponent
          label={t('appointments.appointmentDate')}
          value={appointmentDate}
          onDateChange={setAppointmentDate}
          errorMessage={
            touched && !appointmentDate ? t('appointments.dateRequired') : ''
          }
        />
        <TimeSlotSelector
          label={t('appointments.appointmentTime')}
          timeSlots={timeSlots}
          selectedTime={appointmentTime}
          onTimeSelect={setAppointmentTime}
          errorMessage={
            touched && !appointmentTime ? t('appointments.timeRequired') : ''
          }
        />
        <DropdownComponent
          label={t('appointments.reason')}
          options={reasons}
          selectedValue={reason}
          onValueChange={setReason}
          placeholder={t('appointments.selectReason')}
          errorMessage={
            touched && !reason ? t('appointments.reasonRequired') : ''
          }
        />
        <ButtonComponent
          label={editMode ? t('appointments.update') : t('appointments.submit')}
          onPress={handleSubmit}
          disabled={
            !patientName ||
            !contactNumber ||
            !appointmentDate ||
            !appointmentTime ||
            !reason
          }
        />
      </ScrollView>
    </View>
  );
};

export {AddNewAppointment};
