export interface DatePickerComponentProps {
  label?: string;
  value: Date | null;
  onDateChange: (date: Date) => void;
  errorMessage?: string;
  style?: object;
}
