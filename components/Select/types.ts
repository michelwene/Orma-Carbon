export interface SelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  options: string[];
  label: string;
}
