import * as S from "./styles";
import { PaginationProps } from "./types";

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
