export interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  fullWidth?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
