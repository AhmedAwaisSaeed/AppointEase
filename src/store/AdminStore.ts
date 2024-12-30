import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Appointment = {
  id: number;
  patientName: string;
  contactNumber: string;
  appointmentDate: string;
  appointmentTime: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Cancelled';
};

type AdminState = {
  adminData: {
    username: string;
    password: string;
    name: string;
    role: string;
    appointments: Appointment[];
    feedbackRatings: number[];
  }[];
  addAppointment: (appointment: Appointment) => void;
  loadAdminData: () => Promise<void>;
  updateAppointmentStatus: (appointmentId: number, status: string) => void;
  addFeedback: (rating: number) => void;
  calculateFeedbackStats: () => {average: number; total: number};
};

export const useAdminStore = create<AdminState>((set, get) => ({
  adminData: [],
  addAppointment: async appointment => {
    set(state => {
      const updatedAdminData = [...state.adminData];
      updatedAdminData[0].appointments.push(appointment);
      AsyncStorage.setItem('adminData', JSON.stringify(updatedAdminData));
      return {adminData: updatedAdminData};
    });
  },
  loadAdminData: async () => {
    const data = await AsyncStorage.getItem('adminData');
    if (data) {
      set({adminData: JSON.parse(data)});
    } else {
      const initialData = [
        {
          username: 'admin1',
          password: 'password123',
          name: 'Admin One',
          role: 'admin',
          appointments: [],
          feedbackRatings: [],
        },
      ];
      await AsyncStorage.setItem('adminData', JSON.stringify(initialData));
      set({adminData: initialData});
    }
  },
  updateAppointmentStatus: async (admin, updatedAppointments) => {
    set(state => {
      const updatedAdminData = state.adminData.map(adminData =>
        adminData.username === admin.username
          ? {...adminData, appointments: updatedAppointments}
          : adminData,
      );
      AsyncStorage.setItem('adminData', JSON.stringify(updatedAdminData)); // Persist changes
      return {adminData: updatedAdminData};
    });
  },
  addFeedback: rating => {
    console.log('in add feedback', rating);
    set(state => {
      const updatedAdminData = [...state.adminData];
      updatedAdminData[0].feedbackRatings.push(rating);
      AsyncStorage.setItem('adminData', JSON.stringify(updatedAdminData));
      return {adminData: updatedAdminData};
    });
  },
  calculateFeedbackStats: () => {
    const feedbackRatings = get().adminData[0]?.feedbackRatings || [];
    const total = feedbackRatings.length;
    const average = total
      ? feedbackRatings.reduce((sum, rating) => sum + rating, 0) / total
      : 0;
    return {average, total};
  },
}));
