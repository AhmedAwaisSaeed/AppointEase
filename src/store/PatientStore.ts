import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Patient = {
  username: string;
  password: string;
  name: string;
  role: string;
};

type PatientState = {
  patientData: Patient[];
  loadPatientData: () => Promise<void>;
};

export const usePatientStore = create<PatientState>(set => ({
  patientData: [],
  loadPatientData: async () => {
    const data = await AsyncStorage.getItem('patientData');
    if (data) {
      set({patientData: JSON.parse(data)});
    } else {
      const initialData = [
        {
          username: 'patient1',
          password: 'mypassword1',
          name: 'Patient One',
          role: 'patient',
        },
      ];
      await AsyncStorage.setItem('patientData', JSON.stringify(initialData));
      set({patientData: initialData});
    }
  },
}));
