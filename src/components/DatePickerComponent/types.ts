export interface DatePickerComponentProps {
  label?: string; // Label for the date picker
  value: Date | null; // Selected date
  onDateChange: (date: Date) => void; // Callback for date change
  errorMessage?: string; // Error message to display
  style?: object; // Custom styles for container
}
