export interface TimeSlotSelectorProps {
  label?: string;
  timeSlots: string[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  errorMessage?: string;
  style?: object;
}
