export interface DropdownComponentProps {
  label?: string; // Label for the dropdown
  options: {label: string; value: string}[]; // Dropdown options
  selectedValue: string | null; // Selected value
  onValueChange: (value: string) => void; // Callback for value change
  placeholder?: string; // Placeholder text
  errorMessage?: string; // Error message to display
  style?: object; // Custom styles for container
}
