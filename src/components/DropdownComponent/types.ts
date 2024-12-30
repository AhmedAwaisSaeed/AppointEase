export interface DropdownComponentProps {
  label?: string;
  options: {label: string; value: string}[];
  selectedValue: string | null;
  onValueChange: (value: string) => void;
  placeholder?: string;
  errorMessage?: string;
  style?: object;
}
