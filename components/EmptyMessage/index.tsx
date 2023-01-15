import * as S from "./styles";
import { EmptyMessageProps } from "./types";

export function EmptyMessage({ text }: EmptyMessageProps) {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
