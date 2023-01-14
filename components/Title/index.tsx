import * as S from "./styles";

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return <S.Title>{title}</S.Title>;
}
