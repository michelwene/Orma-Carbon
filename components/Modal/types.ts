import { Parliamentarian } from "../../types/Parlamentarian";

export interface ModalProps {
  onClose: () => void;
  data: Parliamentarian;
  title: string;
  isOpen: boolean;
}

export type ExpensesServerData = {
  ano: number;
  mes: number;
  numDocumento: string;
  dataDocumento: string;
  nomeFornecedor: string;
  tipoDocumento: string;
  valorDocumento: number;
  valorLiquido: number;
};
