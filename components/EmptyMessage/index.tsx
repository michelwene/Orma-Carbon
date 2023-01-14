import * as S from "./styles";

interface EmptyMessageProps {
  text: string;
}

export function EmptyMessage({ text }: EmptyMessageProps) {
  return (
    <S.Container>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
