import * as S from "./styles";

interface PaginationProps {
  nextPage: () => void;
  previousPage: () => void;
  total?: number;
  page?: number;
  buttonNextDisabled?: boolean;
}

export function Pagination({
  nextPage,
  previousPage,
  page,
  buttonNextDisabled,
}: PaginationProps) {
  return (
    <S.Container>
      <S.Button onClick={previousPage} disabled={page === 1}>
        <S.LeftIcon />
      </S.Button>
      <S.Button onClick={nextPage} disabled={buttonNextDisabled}>
        <S.RightIcon />
      </S.Button>
    </S.Container>
  );
}
