export interface TimeSlotSelectorProps {
  label?: string; // Label for the component
  timeSlots: string[]; // List of available time slots
  selectedTime: string | null; // Currently selected time slot
  onTimeSelect: (time: string) => void; // Callback for time slot selection
  errorMessage?: string; // Error message to display
  style?: object; // Custom styles for container
}
