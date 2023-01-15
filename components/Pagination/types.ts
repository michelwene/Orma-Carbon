export interface PaginationProps {
  nextPage: () => void;
  previousPage: () => void;
  total?: number;
  page?: number;
  buttonNextDisabled?: boolean;
}
