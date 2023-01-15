import { Parliamentarian } from "../../types/Parlamentarian";

export interface ModalProps {
  onClose: () => void;
  data: Parliamentarian;
  title: string;
  isOpen: boolean;
}
